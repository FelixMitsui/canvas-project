import Konva from 'konva'
import { GraphType, TextType } from './type'
import Listener from './listener'
import Drawer from './drawer'
import Controller from './controller'
export default class KonvaJS {
  public id: string
  public stage: Konva.Stage | null
  public layer: Konva.Layer | null
  public group: Konva.Group | null
  public count: number
  public type: GraphType | TextType | null
  public selectTarget: Konva.Group | null
  public groupList: Array<{ count: number, group: Konva.Group }>
  private listener: Listener
  public drawer: Drawer
  public controller: Controller
  constructor(id: string) {
    //div標籤 id屬性
    this.id = id
    //選取目標的類型
    this.type = null
    this.stage = null
    this.layer = null
    this.group = null
    //元件計數
    this.count = 0
    //選取目標
    this.selectTarget = null
    //元件陣列
    this.groupList = []
    this.listener = new Listener(this)
    this.drawer = new Drawer(this)
    this.controller = new Controller(this)
  }

  init() {
    const el = document.getElementById(this.id)

    if (!el) {
      return
    }
    const { clientWidth, clientHeight } = el
    const x = clientWidth / 2 - clientWidth / 2
    const y = clientHeight / 2 - clientHeight / 2
    //此處建立主舞台
    this.stage = new Konva.Stage({
      container: this.id,
      width: clientWidth,
      height: clientHeight,
      x: x,
      y: y,
      draggable: false,
      isEdit: false,
      type: GraphType.STAGE,
    })
    //建立圖層
    const { layer, group } = this.newLayer()
    this.layer = layer
    this.group = group
    this.layer.add(this.group)
    this.stage.add(this.layer)
    this.listener.stageEvent()
  }

  getUUID() {
    let d = Date.now()
    if (
      typeof performance !== 'undefined' &&
      typeof performance.now === 'function'
    ) {
      d += performance.now()
    }
    return 'xxxxxxxxxxxxxxxxxxyxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
  }

  //建立圖層
  newLayer() {
    const layer = new Konva.Layer({})
    const group = new Konva.Group()
    const canvas = this.drawer.newCanvas()
    if (canvas) {
      group.add(canvas)
    }
    layer.add(group)

    return {
      layer,
      group,
    }
  }

  newGroup() {
    if (!this.groupList.length) {
      this.count = 0
    }
    this.count++

    const group = new Konva.Group()
    const rect = this.drawer.createGraph(GraphType.RECT)
    const mainText = this.drawer.createGraph(TextType.TEXT, { name: 'mainText', text: `元件(${this.count})`, fill: 'black' })

    mainText?.position({ x: -50, y: -10 })
    group.position({ x: 60, y: 80 })

    const textBg = this.drawer.createGraph(GraphType.RECT, { height: 25, fill: 'white', cornerRadius: 5 })
    const text = this.drawer.createGraph(TextType.TEXT, { fill: 'purple' })

    text?.position({ x: -50, y: -50 })
    textBg?.position({ x: 0, y: -30 })

    if (rect && text && textBg && mainText) {
      group.add(rect)
      group.add(mainText)
      group.add(textBg)
      group.add(text)
      //群組設置為可拖曳
      group.draggable(true)

      this.groupList.push({ group, count: this.count })
      this.group?.add(group)
      this.layer?.draw()
    }

  }
}

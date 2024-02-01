import KonvaJS from './'
import Konva from 'konva'
import { GraphType, TextType } from './type'

export default class Drawer {
  private konva: KonvaJS
  constructor(konva: any) {
    this.konva = konva
  }

  newCanvas() {
    if (!this.konva.stage) return
    const width = this.konva.stage.width()
    const height = this.konva.stage.height()

    const x = width / 2 - width / 2
    const y = height / 2 - height / 2
    const canvas = new Konva.Rect({
      id: this.konva.getUUID(),
      name: GraphType.CANVAS,
      x: x,
      y: y,
      width: width,
      height: height,
      scaleX: 1,
      scaleY: 1,
      // fill: '#FFFFFF',
      draggable: false,
      stroke: '#ffffff',
      strokeWidth: 1,
      type: GraphType.CANVAS,
      opacity: 1,
      isEdit: true,
    })
    return canvas
  }

  createGraph(type: GraphType | TextType, data?: Konva.NodeConfig) {
    const width = this.konva.stage?.width()
    const height = this.konva.stage?.height()

    let attrs = {
      name: type,
      fill: '#99CC00',
      stroke: '#000000',
      shadowColor: 'black',
      shadowBlur: 1,
      shadowOffset: { x: 0, y: 1 },
      strokeWidth: 1,
      draggable: false,
      type: type,
      width: Math.max((width && width / 6) as number, 100),
      height: height && height / 10,
      opacity: 1,
      isEdit: true,
      scaleX: 1,
      scaleY: 1,
      strokeScaleEnabled: false,
      offset: {
        x: 100 / 2,
        y: 50 / 2,
      },
      id: this.konva.getUUID(),
    } as Konva.NodeConfig

    if (data) {
      attrs = { ...attrs, ...data }
    }

    switch (type) {
      case GraphType.RECT:
        return new Konva.Rect(attrs)

      case TextType.TEXT: {
        const {
          height, strokeWith, stroke, shadowColor, shadowBlur, shadowOffset, offset, ...rest
        } = attrs
        let fontSize = width && (width / 6) / 12
        if (attrs.name === 'mainText') {
          fontSize = width && (width / 6) / 10
        }
        return new Konva.Text({
          text: '請嘗試拖曳元件',
          fontSize: Math.max(fontSize as number, 10),
          fontStyle: 'bold',
          strokeWidth: 0,
          align: 'center',
          fill: 'purple',
          offset: {
            x: 0,
            y: 0
          },
          ...rest,
        })
      }
      default:
        break
    }
  }
}

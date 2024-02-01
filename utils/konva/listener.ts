import Konva from 'konva'
import { TextType } from './type'
import KonvaJS from './'
export default class Listener {
  private konva: KonvaJS

  constructor(konva: any) {
    this.konva = konva
  }

  stageEvent() {
    if (!this.konva.stage) return

    //圖層滑鼠按下監聽
    this.konva.layer?.on('mousedown', (event: Konva.KonvaEventObject<MouseEvent>): void => {

      const shape = event.target;
      const parent = shape.getParent()

      //點擊目標相同退出
      if (shape && parent?._id === this.konva.selectTarget?._id) return
      //清空監聽事件
      this.konva.selectTarget?.off()
      //指向新對象
      this.konva.selectTarget = parent as Konva.Group

      this.konva.selectTarget.on('dragstart', () => {
        const children = this.konva.selectTarget?.getChildren();

        if (!children) return
        children?.forEach((node: Konva.Node) => {
          if (node.attrs.name === TextType.TEXT) {
            node.setAttrs({ text: '您正在拖曳元件' })
          }
        });
      })
      this.konva.selectTarget.on('dragend', () => {
        const children = this.konva.selectTarget?.getChildren();

        if (!children) return
        children?.forEach((node: Konva.Node) => {
          if (node.attrs.name === TextType.TEXT) {
            node.setAttrs({ text: '已停止拖曳元件' })
          }
        });
      })
    })
    //圖層雙擊監聽
    this.konva.layer?.on('dblclick', (): void => {

      const children = this.konva.selectTarget?.getChildren();

      if (!children) return
      children?.forEach((node: Konva.Node) => {
        if (node.attrs.name === TextType.TEXT) {
          node.setAttrs({ text: '您點擊了元件兩次' })
        }
      });
    })
  }
}
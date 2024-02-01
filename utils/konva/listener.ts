import Konva from 'konva'
import { GraphType, TextType } from './type'
import KonvaJS from './'
export default class Listener {
  private konva: KonvaJS

  constructor(konva: any) {
    this.konva = konva
  }

  stageEvent() {
    if (!this.konva.stage) return
    //舞台內容元素

    //圖層滑鼠按下監聽
    this.konva.layer?.on('mousedown', (event: Konva.KonvaEventObject<MouseEvent>): void => {

      const shape = event.target;
      const parent = shape.getParent()

      if (shape && parent?._id === this.konva.selectTarget?._id) return
      this.konva.selectTarget?.off()
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
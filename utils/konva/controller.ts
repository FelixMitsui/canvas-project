import KonvaJS from './'
export default class Controller {
  private konva: KonvaJS
  constructor(konva: KonvaJS) {
    this.konva = konva
  }

  onresize() {
    const el = document.getElementById(this.konva.id);
    if (!el) {
      return;
    }
    const { clientWidth, clientHeight } = el;
    this.konva.stage?.setAttrs({
      width: clientWidth,
      height: clientHeight,

    });
    this.konva.layer?.draw()
  }

  deleteTargetGroup(index: number) {
    this.konva.groupList[index].group.destroy()
    this.konva.groupList.splice(index, 1);
  }
}

export enum GraphType {
  RECT = 'rect',
  PARALLELOGRAM = 'parallelogram',
  RHOMBUS = 'rhombus',
  REGULARPOLYGON = 'regularPolygon',
  LINE = 'line',
  ARROW = 'arrow',
  CIRCLE = 'circle',
  PENTAGON = 'pentagon',
  HEXAGON = 'hexagon',
  STAR = 'star',
  TRAPEZIUM = 'trapezium',
  FAN = 'fan',
  CANVAS = 'canvas',
  STAGE = 'stage',
  ELLIPSE = 'ellipse',
}
export enum TextType {
  TEXT = 'text',
}

export enum AnimType {
  ROTATION = ' ROTATION',
  FADE_IN = 'FADE_IN',
  FADE_OUT = 'FADE_OUT',
}
export interface IGraph {
  name: string
  icon: string
  type: GraphType
}

export interface IMenuList {
  name: string
  type: string
  disabled: boolean
}

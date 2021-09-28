export interface IChartParent {

  name: string
  series: IChartChild[]
}

export interface IChartChild {

  name: string
  value: number
}

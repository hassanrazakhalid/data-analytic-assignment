export interface IChartParent {

  name: string
  get series(): IChartChild[]
}

export interface IChartChild {

  name: string
  value: number
}

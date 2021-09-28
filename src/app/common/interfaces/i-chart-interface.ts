export interface IChartParent {

  get name(): string
  get series(): IChartChild[]
}

export interface IChartChild {

  get name(): string
  get value(): number
}

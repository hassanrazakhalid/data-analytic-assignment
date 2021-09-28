import { Topic } from "../common/enums/enums";
import { IChartChild } from "../common/interfaces/i-chart-interface";

export class StudentResult implements IChartChild {

  constructor(
    public questionNo: string,
    public topic: Topic,
    public marks?: number
  ){

  }
  get name(): string {
    return `${this.topic}-${this.questionNo}`
  }

  get value(): number {
    return this.marks ?? 0
  }
}

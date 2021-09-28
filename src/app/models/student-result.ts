import { Topic } from "../common/enums/enums";
import { IChartChild } from "../common/interfaces/i-chart-interface";

export class StudentResult implements IChartChild {

  name: string
  value: number
  constructor(
    public questionNo: string,
    public topic: Topic,
    public marks?: number
  ){
    this.name = `${topic}-${questionNo}`
    this.value = marks ?? 0
  }

}

import { Topic } from "../common/enums";

export class StudentResult {

  constructor(
    public questionNo: string,
    public topic: Topic,
    public marks: number
  ){

  }
}

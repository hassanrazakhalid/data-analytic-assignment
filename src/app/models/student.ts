import { IChartChild, IChartParent } from "../common/interfaces/i-chart-interface";
import { StudentResult } from "./student-result";

export class Student implements IChartParent {

    result: StudentResult[] = []

    // series(): IChartChild[] {
    //     return this.result
    // }
    constructor(
      public name: string
    ) {}

    get series(): IChartChild[] { return this.result }

}



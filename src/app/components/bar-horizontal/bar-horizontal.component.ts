import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Filters } from 'src/app/common/enums/enums';
import { IChartChild, IChartParent } from 'src/app/common/interfaces/i-chart-interface';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.scss']
})
export class BarHorizontalComponent implements OnInit, OnChanges {

  @Input() dataSource: Student[] = []

  formattedStudentData: Student[] = [];

  @Input()
  filters: Filters[] = [Filters.CorrectAttempt, Filters.NotAttempted, Filters.NotAttempted, Filters.WrongAttempt]

  // view: [number, number] = [700, 200];
  view: [number, number] = [0, 0];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Question Numbers';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Correct';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  schemeType: string = 'linear';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    for (const propName in changes) {
      const change = changes[propName];
      if(propName ==  'filters') {
        this.filters = change.currentValue as Filters []
        this.refreshData()
      }
      console.log(change)
      // const to  = JSON.stringify(change.currentValue);
      // const from = JSON.stringify(change.previousValue);
      // const changeLog = `${propName}: changed from ${from} to ${to} `;
      // this.changelog.push(changeLog);
 }
    if(changes.filters) {
      // const s = (changes as any).filters as Filters[]
      // this.filters = s
    }
    console.log(changes)
  }

  ngOnInit(): void {


  }

  private refreshData() {
    const possibleQuestions = this.dataSource[0].result.map(x => x.questionNo)
    const allStudentsResults = this.dataSource
      .map(x => x.result)
      .reduce((a, b) => {
        return a.concat(b)
      })
    let counter = 0

    const formattedDatasource: IChartParent[] = []
    possibleQuestions.forEach(questionString => {
      counter += 1
      if (counter >= 7) return;

      const parent: IChartParent = {
        name: questionString,
        series: new Array<IChartChild>()
      }
      const resultOfSingleQuestion = allStudentsResults.filter(x => x.questionNo == questionString)
      const correctAnswers = resultOfSingleQuestion.filter(x => (x.marks ?? 0) > 0)
      const wrongAnswers = resultOfSingleQuestion.filter(x => (x.marks ?? -1) == 0)
      const notAttempted = resultOfSingleQuestion.filter(x => x.marks == null)

      this.filters.forEach(filter => {

        let newValue = 0
        switch (filter) {
          case Filters.TotalAttempt:
            newValue = resultOfSingleQuestion.length
            break;
          case Filters.CorrectAttempt:
            newValue = correctAnswers.length
            break;
          case Filters.WrongAttempt:
            newValue = wrongAnswers.length
            break;
          case Filters.NotAttempted:
            newValue = notAttempted.length
            break;
        }

        const child: IChartChild = {
          name: filter,
          value: newValue
        }
        parent.series.push(child)
      })
      formattedDatasource.push(parent)

    })
    this.formattedStudentData = formattedDatasource as any[]
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}

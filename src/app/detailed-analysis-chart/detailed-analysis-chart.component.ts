import { Component, Input, OnInit } from '@angular/core';
import { Filters, Topic } from '../common/enums/enums';
import { IChartChild, IChartParent } from '../common/interfaces/i-chart-interface';
import { Student } from '../models/student';

@Component({
  selector: 'app-detailed-analysis-chart',
  templateUrl: './detailed-analysis-chart.component.html',
  styleUrls: ['./detailed-analysis-chart.component.scss']
})
export class DetailedAnalysisChartComponent implements OnInit {

  @Input() dataSource: Student[] = []
  multi: any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        },
        {
          "name": "1990",
          "value": 62000000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        },
        {
          "name": "1990",
          "value": 250000000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        },
        {
          "name": "1990",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "2010",
          "value": 62000000
        },
        {
          "name": "1990",
          "value": 57000000
        }
      ]
    }
  ];

  view: [number,number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Top';
  showYAxisLabel: boolean = false;



  subjectArray :Topic[] = [Topic.Algebra, Topic.Arithemetic, Topic.Probability, Topic.Trigonometry];
  constructor() {
  }
  ngOnInit(): void {

   const allStudentsResults = this.dataSource
   .map(x => x.result)
   .reduce( (a, b) => {
     return a.concat(b)
   } )

   const totalCount = allStudentsResults.length
   const formattedDatasource: IChartParent[] = []

   this.subjectArray.forEach(subject=>{  
        
    const parent: IChartParent = {
      name: subject,
      series: new Array<IChartChild>()
    }

    const TrigCorrect     = allStudentsResults.filter(x => (x.topic == subject && x.value== 1)).length
   const TrigIncorrect   = allStudentsResults.filter(x => (x.topic == subject && x.value== 0)).length
   const TrigUnAttempted = allStudentsResults.filter(x => (x.topic == subject && x.value== null)).length

   const child1: IChartChild = {
     name: Filters.CorrectAttempt,
     value: TrigCorrect
   }
   const child2: IChartChild = {
    name: Filters.WrongAttempt,
    value: TrigIncorrect
  }
  const child3: IChartChild = {
    name: Filters.NotAttempted,
    value: TrigUnAttempted
  }
   parent.series.push(child1)
   parent.series.push(child2)
   parent.series.push(child3)

   formattedDatasource.push(parent)
   })
   
   this.multi = formattedDatasource as any[]
  }

  onSelect(event:any) {
    console.log(event);
  }
}

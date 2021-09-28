import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../common/enums/enums';
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
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Normalized Population';


  constructor() {
  }
  ngOnInit(): void {

   const allStudentsResults = this.dataSource
   .map(x => x.result)
   .reduce( (a, b) => {
     return a.concat(b)
   } )

   const totalCount = allStudentsResults.length
   const correct = allStudentsResults.filter(x => (x.topic == Topic.Trigonometry)).length
   const correct1 = allStudentsResults.filter(x => (x.topic == Topic.Probability))
   const correct2 = allStudentsResults.filter(x => (x.topic == Topic.Arithemetic))
   const correct3 = allStudentsResults.filter(x => (x.topic == Topic.Algebra))
   const inCorrect = allStudentsResults.filter(x => (x.marks ?? -1) == 0).length
   const notAttempted = allStudentsResults.filter(x => x.marks == null).length
  }

  onSelect(event:any) {
    console.log(event);
  }
}

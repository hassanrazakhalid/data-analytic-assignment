import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/common/enums';
import { Student } from 'src/app/models/student';
import { StudentResult } from 'src/app/models/student-result';
import { StudentRepository } from './repository/student-repository';
import { single } from './repository/data';
import { ThemePalette } from '@angular/material/core';
import { IMultiSelect } from 'src/app/common/multi-select.model';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss'],
  providers: [StudentRepository]
})
export class StudentResultComponent implements OnInit {

  private studentData: Student[] = []
  single: any[] = [];
  view: [number, number] = [700, 200];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  countMultiSelect:  IMultiSelect = {
    name: 'By Count',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Total Attempt', completed: false, color: 'primary'},
      {name: 'Correct Attempts', completed: false, color: 'primary'},
      {name: 'Wrong Attempt', completed: false, color: 'primary'},
      {name: 'Not Attempted', completed: false, color: 'primary'},
    ]
  };

  percentMultiSelect:  IMultiSelect = {
    name: 'By Percent',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Correct Percentage', completed: false, color: 'primary'},
      {name: 'Wrong Percentage', completed: false, color: 'primary'},
      {name: 'Attempt Percentage', completed: false, color: 'primary'}
    ]
  }


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  constructor(private _studentRepository: StudentRepository) {

    Object.assign(this, { single });
   }

  ngOnInit(): void {

    const student1 = new Student("Student 1")
    student1.result.push(new StudentResult("Q1", Topic.Trigonometry, 1))
    student1.result.push(new StudentResult("Q2", Topic.Probability, 1))
    student1.result.push(new StudentResult("Q3", Topic.Arithematics, 0))
    student1.result.push(new StudentResult("Q4", Topic.Trigonometry, 0))
    student1.result.push(new StudentResult("Q5", Topic.Trigonometry, 0))
    student1.result.push(new StudentResult("Q6", Topic.Probability, 1))

    const student2 = new Student("Student 2")
    student2.result.push(new StudentResult("Q1", Topic.Trigonometry, 1))
    student2.result.push(new StudentResult("Q2", Topic.Probability, 1))
    student2.result.push(new StudentResult("Q3", Topic.Arithematics, 1))
    student2.result.push(new StudentResult("Q4", Topic.Trigonometry, 1))
    student2.result.push(new StudentResult("Q5", Topic.Trigonometry, 0))
    student2.result.push(new StudentResult("Q6", Topic.Probability, 1))
    // this._studentRepository.getStudentResult()
    // .subscribe({
    //   next: (res) => {

    //     console.log(res)
    //   }
    // })

    // const student1
    this.studentData.push(student1)
    this.studentData.push(student2)
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

  //


}

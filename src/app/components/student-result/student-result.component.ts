import { Component, OnInit } from '@angular/core';
import { Filters, Topic } from 'src/app/common/enums/enums';
import { Student } from 'src/app/models/student';
import { StudentResult } from 'src/app/models/student-result';
import { StudentRepository } from './repository/student-repository';
import { single } from './repository/data';
import { ThemePalette } from '@angular/material/core';
import { IMultiSelect } from 'src/app/common/interfaces/multi-select.model';

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

  studentData: Student[] = []
  filters: Filters[] = []

  countMultiSelect:  IMultiSelect = {
    name: 'By Count',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: Filters.TotalAttempt, completed: false, color: 'primary'},
      {name: Filters.CorrectAttempt, completed: false, color: 'primary'},
      {name: Filters.WrongAttempt, completed: false, color: 'primary'},
      {name: Filters.NotAttempted, completed: false, color: 'primary'},
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

    this._studentRepository.getStudentResult()
    .subscribe({
      next: (res) => {

        this.studentData = this.studentData.concat(res)
        console.log(res)
      }
    })
  }

  onSubjectFilterChanged(changed: string []) {
    this.filters = changed.map(x => x as Filters)
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

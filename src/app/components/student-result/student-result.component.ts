import { Component, OnInit, ViewChild } from '@angular/core';
import { Filters, Topic } from 'src/app/common/enums/enums';
import { Student } from 'src/app/models/student';
import { StudentResult } from 'src/app/models/student-result';
import { StudentRepository } from './repository/student-repository';
import { single } from './repository/data';
import { ThemePalette } from '@angular/material/core';
import { IMultiSelect } from 'src/app/common/interfaces/multi-select.model';
import { TreeSelectComponent } from './helper-components/tree-select/tree-select.component';

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
  percentFilters: Filters[] = []

  @ViewChild('filterTreeSelect') filterTreeSelect!: TreeSelectComponent
  @ViewChild('filterPercentSelect') filterPercentSelect!: TreeSelectComponent

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
      {name: Filters.CorrectPercentage, completed: false, color: 'primary'},
      {name: Filters.WrongPercentage, completed: false, color: 'primary'},
      {name: Filters.AttemptPercentage, completed: false, color: 'primary'}
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
    // this.percentFilters = []
    this.filters = changed.map(x => x as Filters)
    this.filterPercentSelect.uncheckAll()
  }

  onPercentFilterChanged(changed: string []) {
    // this.filters = []
    this.filters = changed.map(x => x as Filters)
    this.filterTreeSelect.uncheckAll()
  }

  //
}

import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/common/enums';
import { Student } from 'src/app/models/student';
import { StudentResult } from 'src/app/models/student-result';
import { StudentRepository } from './repository/student-repository';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss'],
  providers: [StudentRepository]
})
export class StudentResultComponent implements OnInit {

  private studentData: Student[] = []
  constructor(private _studentRepository: StudentRepository) { }

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

}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Topic } from "src/app/common/enums";
import { Student } from "src/app/models/student";
import { StudentResult } from "src/app/models/student-result";
import * as data from '../../../../assets/mock-data.json';

@Injectable()
export class StudentRepository {

  constructor(private _httpClient: HttpClient) {

  }

  public getStudentResult(): Observable<Student[]> {
    const dataArray = (data as any).default
    console.log(dataArray)
    const studentsTransformed: Student[] = dataArray.map((studentObj: any) => {

      const newStudent = new Student(studentObj.name)
      newStudent.result = studentObj.result.map((res: any) => {
        const newSubject = new StudentResult(res.questionNo, res.subject as Topic, res.result)
        return newSubject
      });
      return newStudent
    });
    return new Observable<Student[]>(subscriber => {
      subscriber.next(studentsTransformed)
      subscriber.complete()
      subscriber.unsubscribe()


    })
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Student } from "src/app/models/student";


@Injectable()
export class StudentRepository {

  constructor(private _httpClient: HttpClient) {

  }

  public getStudentResult(): Observable<Student []> {

    return this._httpClient.get('https://docs.google.com/spreadsheets/d/1U5ydyh0CA--61HTgdrnUM1i8ENh9Y4FpWh4Zo-E39_A/edit#gid=0')
    .pipe(
      map( res => {

        const result: Student[] = []
        return result
      })
    )
  }
}

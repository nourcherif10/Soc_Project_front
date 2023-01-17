import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Form } from "@angular/forms";
import { Student } from "src/app/Student";


@Injectable({providedIn: 'root'})
export class InscriptionService {

  private baseUrl = 'http://localhost:8888/STUDENT-SERVICE/Student';
  constructor(private httpClient: HttpClient) { }


 addStudent(student:Student): Observable<Object> {
    return this.httpClient.post("http://localhost:8888/STUDENT-SERVICE/Student/add",student);
  }

  
}

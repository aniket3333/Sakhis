import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string  ='https://localhost:7183/api/Student/GetStudent';
  constructor(private _http:HttpClient) { }

  getAllStudentList():Observable<any>{
return this._http.get(this.url);
  }
}

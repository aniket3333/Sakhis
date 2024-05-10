import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
studentList:any[]=[];
constructor(private _studentService : StudentService){}

ngOnInit(): void {
  this.getAllStudent();
}

getAllStudent(){
  this._studentService.getAllStudentList().subscribe((res:any)=>{
this.studentList = res;
  });
}


}

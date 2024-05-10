import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent implements OnInit {
  userArray : any[]=[];
  constructor(private http:HttpClient){}

  ngOnInit()
  {
    this.getAllUsers();
  }
userDetails : FormGroup = new FormGroup(
  {
id : new FormControl('0'),
name:new FormControl('',[Validators.required]),
email:new FormControl('')
});

saveData()
{
  const obj = this.userDetails.value;
  this.http.post('https://jsonplaceholder.typicode.com/users',obj).subscribe((res:any)=>{
alert("Created");
  });
 
}

getAllUsers()
{
  debugger
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
    this.userArray = res;
  });
}
}

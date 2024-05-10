import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId:string | null = '';
  userI: number=0;
  userDetails : FormGroup = new FormGroup(
    {
  id : new FormControl('0'),
  name:new FormControl(''),
  email:new FormControl('')
  });
constructor(private _router:ActivatedRoute,private http:HttpClient){}

ngOnInit(){
  
this.userId = this._router.snapshot.paramMap.get('id');
if(this.userId)
  {
    this.userI = parseInt(this.userId,10);
    this.getUserById(this.userI);
  }

debugger

}

getUserById(id:number){
this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe((res:any)=>{
console.log(res);
this.userDetails= new FormGroup(
  {
id : new FormControl(res.id),
name:new FormControl(res.name),
email:new FormControl(res.username)
});
});
}



}

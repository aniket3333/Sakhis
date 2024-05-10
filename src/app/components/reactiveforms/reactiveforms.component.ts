import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.scss']
})
export class ReactiveformsComponent {
userDetails : FormGroup = new FormGroup(
  {
id : new FormControl('0'),
name:new FormControl(''),
enmail:new FormControl('')
});
}

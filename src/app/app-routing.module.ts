import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';

const routes: Routes = [
  {
    path:'',component:ReactiveformsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

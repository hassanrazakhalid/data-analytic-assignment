import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentResultComponent } from './components/student-result/student-result.component';

const routes: Routes = [
  {
    path: '', component: StudentResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

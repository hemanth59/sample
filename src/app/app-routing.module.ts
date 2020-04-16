import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Error404Component } from './error404/error404.component';
import { StudentlogComponent } from './studentlog/studentlog.component';
import { DummyComponent } from './dummy/dummy.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'error404', component: Error404Component },
  { path: 'studentlog', component: StudentlogComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'employee-details', component: EmployeeDetailsComponent },


{ path: '', component: LoginComponent },
{ path: '**', component: Error404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

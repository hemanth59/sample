import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Error404Component } from './error404/error404.component';
import { StudentlogComponent } from './studentlog/studentlog.component';
import { HeaderComponent } from './header/header.component';
import { DummyComponent } from './dummy/dummy.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LanguagePipe } from './language.pipe';
import { Language2Pipe } from './language2.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { ChartComponent } from './chart/chart.component';
// import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Error404Component,
    StudentlogComponent,
    HeaderComponent,
    DummyComponent,
    PaginationComponent,
    LanguagePipe,
    Language2Pipe,
    EmployeeDetailsComponent,
    LifecycleComponent,
    EmployeelistComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

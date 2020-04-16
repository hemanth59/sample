import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = "Hemanth";
  password = "Hemanth";
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl( '',[Validators.required, Validators.minLength(4), Validators.maxLength(20) ] ),
      password: new FormControl(),

    })
  }

  login() {
    // alert('login');
    console.log(this.loginForm)
  }

}

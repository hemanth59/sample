import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username = localStorage.getItem('username');;

  password = "Hemanth";
  constructor() { }

  ngOnInit() {

    this.username = 'Hemath';
  }

  signup(h: any) {
    console.log(h);

    // alert('signup');
    // localStorage.setItem('username', 'ganesh');
  }

}

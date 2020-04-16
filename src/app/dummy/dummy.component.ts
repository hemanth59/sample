import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  myBoolean = false;
  myarray = [5, 10, 15, 320, 440, 49, 37];

  constructor() { }

  ngOnInit() {
  }

  dummy() {
    // alert('dummy');
    this.myBoolean = ! this.myBoolean;
  }

}

// Open localhost:4200


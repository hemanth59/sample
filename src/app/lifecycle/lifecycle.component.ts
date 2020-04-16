import { Component, OnInit , AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, DoCheck, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, DoCheck {
  kumar='21';


  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewINit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy( ) {
    console.log('ngOnDestroy');
    alert(this.kumar);
  }

}


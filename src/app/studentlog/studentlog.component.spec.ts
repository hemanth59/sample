import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlogComponent } from './studentlog.component';

describe('StudentlogComponent', () => {
  let component: StudentlogComponent;
  let fixture: ComponentFixture<StudentlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

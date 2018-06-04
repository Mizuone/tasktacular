import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskscompletedcardComponent } from './taskscompletedcard.component';

describe('TaskscompletedcardComponent', () => {
  let component: TaskscompletedcardComponent;
  let fixture: ComponentFixture<TaskscompletedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskscompletedcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskscompletedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

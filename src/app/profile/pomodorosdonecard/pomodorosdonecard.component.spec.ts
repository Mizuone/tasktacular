import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodorosdonecardComponent } from './pomodorosdonecard.component';

describe('PomodorosdonecardComponent', () => {
  let component: PomodorosdonecardComponent;
  let fixture: ComponentFixture<PomodorosdonecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodorosdonecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodorosdonecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

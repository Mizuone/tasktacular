import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCalanderComponent } from './weekly-calander.component';

describe('WeeklyCalanderComponent', () => {
  let component: WeeklyCalanderComponent;
  let fixture: ComponentFixture<WeeklyCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

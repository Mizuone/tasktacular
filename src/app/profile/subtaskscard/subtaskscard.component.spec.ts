import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtaskscardComponent } from './subtaskscard.component';

describe('SubtaskscardComponent', () => {
  let component: SubtaskscardComponent;
  let fixture: ComponentFixture<SubtaskscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtaskscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtaskscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

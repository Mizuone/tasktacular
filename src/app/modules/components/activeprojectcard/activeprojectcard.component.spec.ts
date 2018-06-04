import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveprojectcardComponent } from './activeprojectcard.component';

describe('ActiveprojectcardComponent', () => {
  let component: ActiveprojectcardComponent;
  let fixture: ComponentFixture<ActiveprojectcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveprojectcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveprojectcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

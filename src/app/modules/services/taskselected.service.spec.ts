import { TestBed, inject } from '@angular/core/testing';

import { TaskselectedService } from './taskselected.service';

describe('TaskselectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskselectedService]
    });
  });

  it('should be created', inject([TaskselectedService], (service: TaskselectedService) => {
    expect(service).toBeTruthy();
  }));
});

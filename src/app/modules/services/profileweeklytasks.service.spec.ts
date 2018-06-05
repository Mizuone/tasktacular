import { TestBed, inject } from '@angular/core/testing';

import { ProfileweeklytasksService } from './profileweeklytasks.service';

describe('ProfileweeklytasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileweeklytasksService]
    });
  });

  it('should be created', inject([ProfileweeklytasksService], (service: ProfileweeklytasksService) => {
    expect(service).toBeTruthy();
  }));
});

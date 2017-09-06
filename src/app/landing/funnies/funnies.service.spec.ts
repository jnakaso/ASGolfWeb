import { TestBed, inject } from '@angular/core/testing';

import { FunniesService } from './funnies.service';

describe('FunniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunniesService]
    });
  });

  it('should be created', inject([FunniesService], (service: FunniesService) => {
    expect(service).toBeTruthy();
  }));
});

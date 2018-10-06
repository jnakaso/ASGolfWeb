import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';

import { FunniesService } from './funnies.service';

describe('FunniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModuledule],
      providers: [FunniesService]
    });
  });

  it('should be created', inject([FunniesService], (service: FunniesService) => {
    expect(service).toBeTruthy();
  }));
});

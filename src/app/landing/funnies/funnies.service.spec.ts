import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FunniesService } from './funnies.service';

describe('FunniesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FunniesService]
    });
  });

  it('should be created', inject([FunniesService], (service: FunniesService) => {
    expect(service).toBeTruthy();
  }));
});

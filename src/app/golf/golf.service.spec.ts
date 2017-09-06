import { TestBed, inject } from '@angular/core/testing';

import { GolfService } from './golf.service';

describe('GolfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfService]
    });
  });

  it('should be created', inject([GolfService], (service: GolfService) => {
    expect(service).toBeTruthy();
  }));
});

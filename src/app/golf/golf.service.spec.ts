import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GolfService } from './golf.service';

describe('GolfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [GolfService]
    });
  });

  it('should be created', inject([GolfService], (service: GolfService) => {
    expect(service).toBeTruthy();
  }));
});

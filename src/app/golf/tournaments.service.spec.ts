import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TournamentsService } from './tournaments.service';

describe('TournamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TournamentsService]
    });
  });

  it('should be created', inject([TournamentsService], (service: TournamentsService) => {
    expect(service).toBeTruthy();
  }));
});

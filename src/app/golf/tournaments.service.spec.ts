import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';

import { TournamentsService } from './tournaments.service';

describe('TournamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModuledule],
      providers: [TournamentsService]
    });
  });

  it('should be created', inject([TournamentsService], (service: TournamentsService) => {
    expect(service).toBeTruthy();
  }));
});

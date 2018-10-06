import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StatsService } from './stats.service';

describe('StatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StatsService]
    });
  });

  it('should be created', inject([StatsService], (service: StatsService) => {
    expect(service).toBeTruthy();
  }));
});

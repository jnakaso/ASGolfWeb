import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PlayersService } from './players.service';

describe('PlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PlayersService]
    });
  });

  it('should be created', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});

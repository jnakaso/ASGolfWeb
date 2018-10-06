import { TestBed, inject } from '@angular/core/testing';

import { TournamentService } from './tournament.service';
import { ASRound } from '../golf/model/asround';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { ASTournament } from '../golf/astournament';

describe('TournamentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentService]
    });
  });

  it('should be created', inject([TournamentService], (service: TournamentService) => {
    expect(service).toBeTruthy();
  }));




});

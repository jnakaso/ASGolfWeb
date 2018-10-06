import { TestBed, inject } from '@angular/core/testing';

import { ScoringService } from './scoring.service';
import { ASRound } from '../golf/model/asround';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { ASTournament } from '../golf/astournament';

describe('ScoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoringService]
    });
  });

  it('should be created', inject([ScoringService], (service: ScoringService) => {
    expect(service).toBeTruthy();
  }));


  it('calculate', inject([ScoringService], (service: ScoringService) => {
    const round1 = new ASRound({
      flight: 'A',
      totalNet: 88,
      player: 'PlayerA'
    });
    const round2 = new ASRound({
      flight: 'A',
      totalNet: 78,
      player: 'PlayerB'
    });
    const round3 = new ASRound({
      flight: 'A',
      totalNet: 80,
      player: 'PlayerC'
    });
    const round4 = new ASRound({
      flight: 'A',
      totalNet: 84,
      player: 'PlayerD'
    });
    const tournament = new ASTournamentSummary({
      info: new ASTournament({ type: 'NORMAL' }),
      rounds: [round1, round2, round3, round4]
    });
    const winners = service.calculate(tournament);
    expect(winners.length).toEqual(3);
    expect(winners[0].player).toEqual('PlayerB');
    expect(winners[1].player).toEqual('PlayerC');
    expect(winners[1].money).toEqual(20);
  }));

  it('calculate with tie', inject([ScoringService], (service: ScoringService) => {
    const round1 = new ASRound({
      flight: 'A',
      totalNet: 78,
      player: 'PlayerA'
    });
    const round2 = new ASRound({
      flight: 'A',
      totalNet: 78,
      player: 'PlayerB'
    });

    const tournament = new ASTournamentSummary({
      info: new ASTournament({ type: 'NORMAL' }),
      rounds: [round1, round2]
    });
    const winners = service.calculate(tournament);
    expect(winners.length).toEqual(2);
    expect(winners[1].money).toEqual(30);
    expect(winners[1].points).toEqual(7.5);

  }));

});

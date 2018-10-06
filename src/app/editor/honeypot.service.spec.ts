import { TestBed, inject } from '@angular/core/testing';

import { HoneypotService } from './honeypot.service';
import { ASRound } from '../golf/model/asround';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { RoundsService } from './rounds.service';

describe('HoneypotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoneypotService, RoundsService]
    });
  });

  it('should be created', inject([HoneypotService], (service: HoneypotService) => {
    expect(service).toBeTruthy();
  }));

  fit('calculate', inject([HoneypotService, RoundsService],
    (service: HoneypotService, roundsService: RoundsService) => {
      const r1 = new ASRound({ id: 1, totalNet: 68 });
      const r2 = new ASRound({ id: 2, frontNet: 36 });
      const r3 = new ASRound({ id: 3, backNet: 35 });
      const r4 = new ASRound({ id: 4, backNet: 40 });

      const tournament = new ASTournamentSummary({
        rounds: [r1, r2, r3, r4]
      })

      const totalSpy = spyOn(roundsService, 'findLowest')
        .and.returnValue([r1]);
      const frontSpy = spyOn(roundsService, 'findLowestFront')
        .and.returnValue([r2]);
      const backSpy = spyOn(roundsService, 'findLowestBack')
        .and.returnValue([r3]);
      const actual = service.calculate(tournament);
      expect(actual.totalScore).toEqual(68);
      expect(actual.frontScore).toEqual(36);
      expect(actual.backScore).toEqual(35);
    }));

  fit('remove', inject([HoneypotService], (service: HoneypotService) => {
    const r1 = new ASRound({ id: 1 });
    const r2 = new ASRound({ id: 2 });
    const r3 = new ASRound({ id: 3 });

    const all = [r1, r2, r3];
    const some = [r3, r1];
    const actual = service.remove(all, some);
    expect(actual).toEqual([r2]);
  }));
});

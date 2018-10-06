import { TestBed, inject } from '@angular/core/testing';

import { RoundsService } from './rounds.service';
import { ASRound } from '../golf/model/asround';

describe('RoundsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoundsService]
    });
  });

  it('should be created', inject([RoundsService], (service: RoundsService) => {
    expect(service).toBeTruthy();
  }));

  it('filteByFlight', inject([RoundsService], (service: RoundsService) => {
    const round = new ASRound({
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
      flight: 'B',
      totalNet: 78,
      player: 'PlayerC'
    });
    const found = service.filteByFlight([round, round2, round3], 'A');
    expect(found.length).toEqual(2);
  }));

  it('should updateRoundTotals', inject([RoundsService], (service: RoundsService) => {
    const round = new ASRound({
      handicap: 16, holes: [
        5, 5, 5, 5, 5, 5, 5, 5, 5,
        4, 4, 4, 4, 4, 4, 4, 4, 4]
    });
    service.updateRoundTotals(round);
    expect(round.front).toEqual(45);
    expect(round.frontNet).toEqual(37);
    expect(round.back).toEqual(36);
    expect(round.backNet).toEqual(28);
    expect(round.total).toEqual(81);
    expect(round.totalNet).toEqual(65);
  }));

  it('should find the lowest', inject([RoundsService], (service: RoundsService) => {
    const round0 = new ASRound({ id: 0, totalNet: 66 });
    const rounda = new ASRound({ id: 1, totalNet: 65 });
    const roundb = new ASRound({ id: 2, totalNet: 68 });
    const roundc = new ASRound({ id: 3, totalNet: 67 });
    const rounds = [round0, rounda, roundb, roundc];
    const found = service.findLowest(rounds);
    expect(rounds.length).toEqual(4);
    expect(found).toEqual([rounda]);
  }));

  it('should find the findLowestFront', inject([RoundsService], (service: RoundsService) => {
    const round0 = new ASRound({ id: 0, frontNet: 66 });
    const rounda = new ASRound({ id: 1, frontNet: 65 });
    const roundb = new ASRound({ id: 2, frontNet: 68 });
    const roundc = new ASRound({ id: 3, frontNet: 67 });
    const found = service.findLowestFront([round0, rounda, roundb, roundc]);
    expect(found).toEqual([rounda]);
  }));

  it('should find the findLowestBack', inject([RoundsService], (service: RoundsService) => {
    const round0 = new ASRound({ id: 0, backNet: 66 });
    const rounda = new ASRound({ id: 1, backNet: 65 });
    const roundb = new ASRound({ id: 2, backNet: 68 });
    const roundc = new ASRound({ id: 3, backNet: 67 });
    const found = service.findLowestBack([round0, rounda, roundb, roundc]);
    expect(found).toEqual([rounda]);
  }));
});

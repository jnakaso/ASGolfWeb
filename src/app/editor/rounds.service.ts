import { Injectable } from '@angular/core';
import { ASRound } from '../golf/model/asround';

@Injectable()
export class RoundsService {

  constructor() { }

  updateRoundTotals(round: ASRound) {
    const fr = round.holes
      .slice(0, 9)
      .reduce(((total, score) => total + score), 0);

    const bk = round.holes
      .slice(9, 18)
      .reduce(((total, score) => total + score), 0);

    round.front = fr;
    round.back = bk;
    round.total = fr + bk;
    round.frontNet = fr - (round.handicap / 2);
    round.backNet = bk - (round.handicap / 2);
    round.totalNet = round.total - round.handicap;
  }

  filteByFlight(rounds: ASRound[], flight: string) {
    return rounds.filter(el => el.flight === flight);
  }

  findLowest(rounds: ASRound[]) {
    const sorted = rounds.sort((r1, r2) => r1.totalNet - r2.totalNet);
    return rounds.filter(r1 => r1.totalNet === sorted[0].totalNet);
  }

  findLowestFront(rounds: ASRound[]) {
    const sorted = rounds.sort((r1, r2) => r1.frontNet - r2.frontNet);
    return rounds.filter(r1 => r1.frontNet === sorted[0].frontNet);
  }

  findLowestBack(rounds: ASRound[]) {
    const sorted = rounds.sort((r1, r2) => r1.backNet - r2.backNet);
    return rounds.filter(r1 => r1.backNet === sorted[0].backNet);
  }

}

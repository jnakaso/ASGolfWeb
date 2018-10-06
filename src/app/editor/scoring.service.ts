import { Injectable } from '@angular/core';
import { ASPurse } from '../golf/model/aspurse';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { ASRound } from '../golf/model/asround';
import { ASWinner } from '../golf/model/aswinner';
import { RoundsService } from './rounds.service';

@Injectable()
export class ScoringService {

  flights = ['A', 'B'];

  constructor(private roundsService: RoundsService,
  ) { }

  calculate(tournament: ASTournamentSummary): ASWinner[] {
    return [].concat.apply([], this.flights.map(flt => {
      var purse = this.createPurse(tournament);
      var working = this.roundsService.filteByFlight(tournament.rounds, flt);
      working = working.sort((r1: ASRound, r2: ASRound) => r1.totalNet - r2.totalNet);
      var fltWinners = []
      var place = 1;
      while (purse.length > 0 && working.length > 0) {
        var left = 0;
        var money = 0;
        var points = 0;
        const winnerRounds = this.roundsService.findLowest(working);

        left = Math.min(purse.length, winnerRounds.length);
        for (var i = 0; i < left; i++) {
          money += purse[i].earnings;
          points += purse[i].points;
        }
        money = money / winnerRounds.length;
        points = points / winnerRounds.length;

        fltWinners = fltWinners.concat(winnerRounds.map(round => this.createWinner(round, place, points, money)));
        place += left;
        purse = purse.slice(left);
        working = working.slice(left);
      }
      return fltWinners;
    }));
  }

  // TODO different purse per year
  createPurse(tournament: ASTournamentSummary): ASPurse[] {
    switch (tournament.info.type) {
      case 'DAY_ONE': return [];
      case 'DAY_TWO': return [
        new ASPurse(100, 18),
        new ASPurse(75, 12),
        new ASPurse(50, 6)];
      case 'NORMAL':
      default:
        return [
          new ASPurse(40, 9),
          new ASPurse(20, 6),
          new ASPurse(10, 3)
        ];
    }
  }

  createWinner(round: ASRound, place, points, money) {
    return new ASWinner({
      roundID: round.id,
      playerID: round.playerID,
      player: round.player,
      score: round.totalNet,
      place: place,
      points: points,
      money: money,
      flight: round.flight
    });
  }
}

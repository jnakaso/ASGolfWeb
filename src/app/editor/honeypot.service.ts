import { Injectable } from '@angular/core';
import { ASHoneypot } from '../golf/model/ashoneypot';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { TournamentService } from './tournament.service';
import { ASRound } from '../golf/model/asround';
import { RoundsService } from './rounds.service';

@Injectable()
export class HoneypotService {

  ante = 5;

  constructor(private roundsService: RoundsService) {
  }

  calculate(tournament: ASTournamentSummary): ASHoneypot {
    const honeypot = new ASHoneypot({});
    var working = tournament.rounds.slice();
    const purse = this.ante * working.length;
    if (working.length > 0) {
      const lowRounds = this.roundsService.findLowest(working);
      honeypot.totalWinners = lowRounds.map(r => r.player);
      honeypot.totalEarnings = purse / 2 / lowRounds.length;
      honeypot.totalScore = lowRounds[0].totalNet;
      working = this.remove(working, lowRounds);
    }

    if (working.length > 0) {
      const lowRounds = this.roundsService.findLowestFront(working);
      honeypot.frontWinners = lowRounds.map(r => r.player);
      honeypot.frontEarnings = purse / 4 / lowRounds.length;
      honeypot.frontScore = lowRounds[0].frontNet;
      working = this.remove(working, lowRounds);
    }

    if (working.length > 0) {
      const lowRounds = this.roundsService.findLowestBack(working);
      honeypot.backWinners = lowRounds.map(r => r.player);
      honeypot.backEarnings = purse / 4 / lowRounds.length;
      honeypot.backScore = lowRounds[0].backNet;
      working = this.remove(working, lowRounds);
    }
    return honeypot;
  }

  remove(main: ASRound[], remove: ASRound[]) {
    remove.forEach(element => {
      main.splice(main.indexOf(element), 1);
    });
    return main;
  }
}

import { Injectable } from '@angular/core';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { ASTournament } from '../golf/astournament';
import { ASKp } from '../golf/model/askp';
import { ASRound } from '../golf/model/asround';
import { ASWinner } from '../golf/model/aswinner';
import { ASPurse } from '../golf/model/aspurse';
import { ASHoneypot } from '../golf/model/ashoneypot';
import { HoneypotService } from './honeypot.service';
import { ScoringService } from './scoring.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class TournamentService {

  flights = ['A', 'B'];
  maxHandicap = 40;

  constructor(
    private scoringService: ScoringService,
    private honeypotService: HoneypotService) { }

  createSummary() {
    return new ASTournamentSummary({
      info: new ASTournament({
        courseName: 'New Tournament',
        date: new Date(),
        type: 'NORMAL',
        slope: 113,
        rating: 71.0
      }),
      kps: [],
      rounds: [],
      winners: []
    });
  }

  createRound() {
    return new ASRound({
      handicap: 0,
      holes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    });
  }

  addRound(tournament, round: ASRound): Observable<ASTournamentSummary> {
    tournament.rounds.push(round);
    return of(this.updateTournamentTotals(tournament));
  }

  updateRound(tournament, round: ASRound): Observable<ASTournamentSummary> {
    return of(this.updateTournamentTotals(tournament));
  }

  deleteRound(tournament: ASTournamentSummary, round: ASRound): Observable<ASTournamentSummary> {
    const index = tournament.rounds.findIndex(elem => elem === round);
    tournament.rounds.splice(index, 1);
    return of(this.updateTournamentTotals(tournament));
  }

  addKp(tournament, kp: ASKp): Observable<ASTournamentSummary> {
    tournament.kps.push(kp);
    return of(tournament);
  }

  updateKp(tournament, kp): Observable<ASTournamentSummary> {
    return of(tournament);
  }

  deleteKp(tournament: ASTournamentSummary, kp): Observable<ASTournamentSummary> {
    const index = tournament.kps.findIndex(elem => elem === kp);
    tournament.kps.splice(index, 1);
    return of(tournament);
  }

  calcAdjustedHandicap(player, tournament: ASTournamentSummary): number {
    return Math.round(Math.min(player.handicap, this.maxHandicap) * tournament.info.slope / 113);
  }

  updateTournamentTotals(tournament: ASTournamentSummary): ASTournamentSummary {
    tournament.winners = this.scoringService.calculate(tournament);
    tournament.honeypot = this.honeypotService.calculate(tournament);
    return tournament;
  }



}

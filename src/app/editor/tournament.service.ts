import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ASPlayer } from '../golf/asplayer';
import { ASTournament } from '../golf/astournament';
import { ASKp } from '../golf/model/askp';
import { ASRound } from '../golf/model/asround';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { ASWinner } from '../golf/model/aswinner';
import { HoneypotService } from './honeypot.service';
import { ScoringService } from './scoring.service';

@Injectable()
export class TournamentService {

  flights = ['A', 'B'];
  maxHandicap = 40;

  constructor(
    private http: HttpClient,
    private scoringService: ScoringService,
    private honeypotService: HoneypotService) { }

  createSummary() {
    return new ASTournamentSummary({
      tournament: new ASTournament({
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

  mapTour(tour: any): ASTournamentSummary {
    return new ASTournamentSummary({
      id: tour.id,
      tournament: new ASTournament({
        courseName: tour.course.name,
        date: tour.date,
        type: tour.type,
        slope: tour.slope,
        rating: tour.rating
      }),
      kps: tour.kps.map(kk => this.mapKp(kk)),
      rounds: tour.rounds.map(rr => this.mapRound(rr)),
      winners: tour.winners.map(ww => this.mapWinner(ww)),
    });
  }

  mapKp(kk): ASKp {
    return new ASKp(
      {
        playerID: kk.player.id,
        player: kk.player.firstName + ' ' + kk.player.lastName,
        hole: kk.hole,
        flight: kk.flight
      });
  }

  mapRound(rr): ASRound {
    return new ASRound(
      {
        id: rr.round,
        player: rr.player.firstName + ' ' + rr.player.lastName,
        playerID: rr.player.id,
        flight: rr.flight,
        hdcp: rr.handicap,
        holes: rr.scores,
        front: rr.front,
        back: rr.back,
        total: rr.total,
        frontNet: rr.frontNet,
        backNet: rr.backNet,
        totalNet: rr.totalNet,
        adjusted: rr.adjusted
      });
  }

  mapWinner(ww): ASWinner {
    return new ASWinner(
      {
        roundID: ww.round.id,
        playerID: ww.round.player.id,
        player: ww.round.player.firstName + " " + ww.round.player.lastName,
        flight: ww.round.flight,
        score: ww.round.total,
        place: ww.finish,
        points: ww.points,
        earnings: ww.earnings
      }
    )}

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

  calcAdjustedHandicap(player: ASPlayer, tournament: ASTournamentSummary): number {
    return Math.round(Math.min(player.handicap, this.maxHandicap) * tournament.tournament.slope / 113);
  }

  updateTournamentTotals(tournament: ASTournamentSummary): ASTournamentSummary {
    tournament.winners = this.scoringService.calculate(tournament);
    tournament.honeypot = this.honeypotService.calculate(tournament);
    return tournament;
  }

  saveTournament(season: number, summary: ASTournamentSummary): Observable<any> {
    if (summary.id == null) {
      const params = new HttpParams()
        .append("seasonId", season.toString())
        .append("tournament", JSON.stringify(summary))
        .append("update", "true");
      return this.http.post("/tournament-import", null, { params: params })
        .pipe(map(resp => this.mapTour(resp)));
    } else {
      return this.http.post("/tournament-update", summary)
        .pipe(map(resp => this.mapTour(resp)));
    }
  }

}

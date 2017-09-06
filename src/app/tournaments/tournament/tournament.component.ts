import { Component, OnInit, Input } from '@angular/core';
import { FLIGHTS } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTournament } from '../../golf/astournament';

@Component({
  selector: 'as-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  flights = FLIGHTS;
  front = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  back = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  @Input() season: number;
  @Input() tournamentId: number;
  @Input() hideTop: boolean = false;

  tournament: any;

  constructor(private tournamentsService: TournamentsService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    this.season = changes.season.currentValue;
    this.loadData();
  }

  loadData() {
    this.tournamentsService
      .getTournament(this.season, this.tournamentId)
      .subscribe(tt => this.tournament = tt);
  }

  getCourseName() {
    return this.tournament ? this.tournament.tournament.courseName : '';
  }

  getKps(flt: string): any[] {
    return this.tournament ?
      this.tournament.kps.filter(kk => kk.flight == flt)
      : [];
  }

  getWinners(flt: string): any[] {
    return this.tournament ?
      this.tournament.winners.filter(kk => kk.flt == flt)
      : [];
  }

  getRounds(): any[] {
    return this.tournament ?
      this.tournament.rounds.sort((r1, r2) => {
        let chk = r1.flight.localeCompare(r2.flight);
        return chk == 0 ?
          r1.totalNet - r2.totalNet : chk;
      }) : [];
  }

  getTournamentDate(tour: any): string {
    return tour ? tour.tournament ? tour.tournament.date : null : null;
  }

  getTournamentSlope(tour: any): string {
    return tour ? tour.tournament ? tour.tournament.slope : null : null;
  }

  getTournamentRating(tour: any): string {
    return tour ? tour.tournament ? tour.tournament.rating : null : null;
  }

  showWinners(tour) {
    return tour && tour.winners && tour.winners.length > 0;
  }

}

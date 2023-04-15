import { Component, OnInit } from '@angular/core';
import { GolfService, FLIGHTS } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';

@Component({
  selector: 'as-last-tournament',
  templateUrl: './last-tournament.component.html',
  styleUrls: ['./last-tournament.component.css']
})
export class LastTournamentComponent implements OnInit {

  tournament: any;

  constructor(
    private golfService: GolfService,
    private tournamentService: TournamentsService) {
  }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.tournamentService.getTournament(
          ini.currentSeason,
          ini.lastTournamentId
        ).subscribe(td => this.tournament = td);
      });
  }

  getFlights() {
    return FLIGHTS;
  }

  getWinners(flt: string) {
    return this.tournament.winners.filter(w => w.flight == flt);
  }
}

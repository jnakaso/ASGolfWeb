import { Component, OnInit } from '@angular/core';
import { GolfService, FLIGHTS } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTwoDay } from '../../golf/astwo-day';

@Component({
  selector: 'as-mini-two-day',
  templateUrl: './mini-two-day.component.html',
  styleUrls: ['./mini-two-day.component.css']
})
export class MiniTwoDayComponent implements OnInit {

  showTwoday: boolean = true;
  twoday: ASTwoDay = new ASTwoDay();

  constructor(
    private golfService: GolfService,
    private tournamentService: TournamentsService) {
  }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.showTwoday = ini.showTwoDay;
        this.tournamentService.getTwoDay(ini.currentSeason).subscribe(td => this.twoday = td);
      });
  }

  getFlights() {
    return FLIGHTS;
  }

  getScores(flt: string) {
    return this.twoday.scores
      .filter(s => s.flight == flt)
      .sort((s1, s2) => s1.total - s2.total)
  }
}

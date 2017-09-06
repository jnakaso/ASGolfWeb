import { Component, OnInit, Input } from '@angular/core';
import { FLIGHTS } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTwoDay } from '../../golf/astwo-day';

@Component({
  selector: 'as-tournaments-two-day',
  templateUrl: './tournaments-two-day.component.html',
  styleUrls: ['./tournaments-two-day.component.css']
})
export class TournamentsTwoDayComponent implements OnInit {

  @Input() season: number;
  twoday: ASTwoDay = new ASTwoDay();
  flights = FLIGHTS;

  constructor(private tournamentsService: TournamentsService) {
  }

  ngOnInit() {
    if (this.season) {
      this.loadTwoday(this.season);
    }
  }


  ngOnChanges(changes: any) {
    this.loadTwoday(this.season);
  }

  twodayScores(flt: string) {
    return this.twoday.scores.filter(ss => ss.flight == flt);
  }

  loadTwoday(season: number) {
    this.tournamentsService.getTwoDay(this.season)
      .subscribe(tt => this.twoday = tt);
  }

}

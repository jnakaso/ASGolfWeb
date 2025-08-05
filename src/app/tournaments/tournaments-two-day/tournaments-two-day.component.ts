import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FLIGHTS } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTwoDay } from '../../golf/astwo-day';

@Component({
  selector: 'as-tournaments-two-day',
  templateUrl: './tournaments-two-day.component.html',
  styleUrls: ['./tournaments-two-day.component.css']
})
export class TournamentsTwoDayComponent implements OnChanges {

  @Input()
  twoDay: ASTwoDay = new ASTwoDay();

  flights = FLIGHTS;

  constructor(private tournamentsService: TournamentsService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.twoDay) {
//      console.log(changes.twoDay)
    }
  }

  twodayScores(flt: string) {
    return this.twoDay.scores
      .filter(s => s.flight == flt)
      .map(s => {
        s.total = s.dayOne + s.dayTwo;
        return s;
      })
      .sort((s1, s2) => s1.total - s2.total)
  }
}

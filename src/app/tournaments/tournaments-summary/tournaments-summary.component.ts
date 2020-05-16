import { Component, OnInit, Input } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTournament } from '../../golf/astournament';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'as-tournaments-summary',
  templateUrl: './tournaments-summary.component.html',
  styleUrls: ['./tournaments-summary.component.css']
})
export class TournamentsSummaryComponent implements OnInit {

  @Input() season: number;
  tournaments: ASTournament[] = [];
  standings: any;

  constructor(
    private golfService: GolfService,
    private tournamentsService: TournamentsService,
    private statsService: StatsService) {
  }

  ngOnInit() {
    this.loadData(this.season);
  }

  ngOnChanges(changes: any) {
    if (changes.season) {
      this.loadData(changes.season.currentValue);
    }
  }
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'SummaryPoints') {
      this.standings = this.standings.sort((s1, s2) => s2.points - s1.points);
    } else if ($event.nextId === 'SummaryEarnings') {
      this.standings = this.standings.sort((s1, s2) => s2.earnings - s1.earnings);
    } else if ($event.nextId === 'SummaryKps') {
      this.standings = this.standings.sort((s1, s2) => s2.kps - s1.kps);
    }
  }

  loadData(season: number) {
    if (this.season) {
      this.tournamentsService.getTournaments(this.season)
        .subscribe((tt: ASTournament[]) => this.tournaments = tt.reverse());
      this.statsService.getStats(this.season)
        .subscribe(ss => this.standings = ss.standings);
    }
  }

}

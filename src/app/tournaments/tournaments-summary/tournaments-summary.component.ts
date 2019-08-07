import { Component, OnInit, Input } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';
import { TournamentsService } from '../../golf/tournaments.service';
import { ASTournament } from '../../golf/astournament';

@Component({
  selector: 'as-tournaments-summary',
  templateUrl: './tournaments-summary.component.html',
  styleUrls: ['./tournaments-summary.component.css']
})
export class TournamentsSummaryComponent implements OnInit {

  @Input() season: number;
  tournaments: ASTournament[] = [];
  stats: any;

  constructor(
    private golfService: GolfService,
    private tournamentsService: TournamentsService,
    private statsService: StatsService) {
  }

  ngOnInit() {
    this.loadData(this.season);
  }

  getStandings() {
    return this.stats ? this.stats.standings : [];
  }

  ngOnChanges(changes: any) {
    this.loadData(this.season);
  }

  loadData(season: number) {
    if (this.season) {
      this.tournamentsService.getTournaments(this.season)
        .subscribe((tt: ASTournament[]) => this.tournaments = tt.reverse());
      this.statsService.getStats(this.season)
        .subscribe(ss => this.stats = ss);
    }
  }

}

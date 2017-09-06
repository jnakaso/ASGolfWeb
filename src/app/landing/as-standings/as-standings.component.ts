import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';
@Component({
  selector: 'as-standings',
  templateUrl: './as-standings.component.html',
  styleUrls: ['./as-standings.component.css']
})
export class AsStandingsComponent implements OnInit {

  standings: any[] = [];
  constructor(
    private golfService: GolfService,
    private statsService: StatsService) { }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.statsService.getStats(ini.currentSeason)
          .subscribe(stats => this.standings = stats.standings)
      });
  }

}

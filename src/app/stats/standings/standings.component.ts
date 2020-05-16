import { Component, Input } from '@angular/core';
import { StatsComponent } from '../stats/stats.component';
@Component({
  selector: 'as-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent {

  @Input()
  season: number;
  @Input()
  data: any;

  getHandicap(p: any) {
    return isNaN(p.handicap) ? 0 : p.handicap;
  }
}

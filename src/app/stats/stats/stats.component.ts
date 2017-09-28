import { Component, OnInit, Input } from '@angular/core';
import { FLIGHTS } from '../../golf/golf.service';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';

const SECTIONS = [
  { href: '#Standings', label: 'Standings' },
  { href: '#Vardon', label: 'Vardon' },
  { href: '#Sandbagger', label: 'Sandbagger' },
  { href: '#MostImproved', label: 'Most Improved' },
  { href: '#Birdies', label: 'U.F.O.s' },
  { href: '#GoodBadUgly', label: 'The Good, The Bad, and The Ugly' },
  { href: '#ThreePutt', label: 'Three Putt KPs' },
  { href: '#DrJekyll', label: 'Dr. Jekyll and Mr. Hyde' }
];

@Component({
  selector: 'as-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  sections = SECTIONS;
  season: number;
  stats: any;

  constructor(
    private golfService: GolfService,
    private statsService: StatsService) {
  }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => this.season = ini.currentSeason);
    this.loadData(this.season);
  }

  seasonChange(newSeason: number) {
    this.loadData(newSeason);
  }

  loadData(newSeason: number) {
    if (newSeason != undefined) {
      this.season = newSeason;
      this.loadStats(this.season);
    }
  }

  loadStats(season: number) {
    this.statsService.getStats(this.season)
      .subscribe(s => this.stats = s);
  }

  getStats(section: string, defaultValue?: any): any {
    return this.stats ? this.stats[section] : defaultValue ? defaultValue : [];
  }

}

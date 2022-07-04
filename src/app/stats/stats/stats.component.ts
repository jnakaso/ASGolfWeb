import { Component, OnInit, Input } from '@angular/core';
import { FLIGHTS } from '../../golf/golf.service';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';

const SECTIONS = [
  { id: 'vardon', label: 'Vardon' },
  { id: 'sandbagger', label: 'Sandbagger' },
  { id: 'mostImproved', label: 'Most Improved' },
  { id: 'birdies', label: 'U.F.O.s' },
  { id: 'goodBadUgly', label: 'The Good, The Bad, and The Ugly' },
  { id: 'threePutt', label: 'Three Putt KPs' },
  { id: 'drJekyll', label: 'Dr. Jekyll and Mr. Hyde' },
  { id: 'standings', label: 'Standings' },
];

@Component({
  selector: 'as-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  activeIds = SECTIONS.map(s => s.id);
  sections = SECTIONS;
  season;
  seasons = [];
  stats: any;

  constructor(
    private golfService: GolfService,
    private statsService: StatsService) {
  }

  ngOnInit() {
    this.seasons = this.golfService.getSeasons()
      .map(s => { return { value: s, label: s } });
    this.golfService.getInitValues()
      .subscribe(ini => {
        this.season = this.seasons.find(s => s.value ==ini.currentSeason);
        this.loadData(this.season);
      });
  }

  seasonChange(newSeason: number) {
    this.loadData(newSeason);
  }

  loadData(newSeason) {
    if (newSeason != undefined) {
      this.season = newSeason;
      this.loadStats(this.season);
    }
  }

  loadStats(season: number) {
    this.statsService.getStats(this.season.value)
      .subscribe(s => this.stats = s);
  }

  getStats(section: string, defaultValue?: any): any {
    return this.stats ? this.stats[section] : defaultValue ? defaultValue : [];
  }

}

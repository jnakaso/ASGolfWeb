import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../golf/stats.service';
@Component({
  selector: 'as-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  private static RECORD_SECTIONS = [
    { id: 'goyHistory', label: `G.O.Y.` },
    { id: 'bigMoney', label: `Money Player` },
    { id: 'kpSweeper', label: `KP Sweeper` },
    { id: 'holesInOne', label: `Hole In Ones` },
    { id: 'whereWePlayed', label: `Where We've Played` }
  ];
  activeIds = RecordsComponent.RECORD_SECTIONS.map(sec => sec.id);
  sections = RecordsComponent.RECORD_SECTIONS;
  stats: any;

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    let cmp = this;
    this.statsService.getRecords()
      .subscribe(s => this.stats = s);
  }

  getRecords(section: string, defaultValue = []) {
    return this.stats ? this.stats[section] : defaultValue;
  }

}

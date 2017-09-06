import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../golf/stats.service';
@Component({
  selector: 'as-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  private static RECORD_SECTIONS = [
    { href: '#MoneyPlayer', label: `Money Player` },
    { href: '#KpSweeper', label: `KP Sweeper` },
    { href: '#HolesInOne', label: `Hole In Ones` },
    { href: '#WhereWePlayed', label: `Where We've Played` }
  ];
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

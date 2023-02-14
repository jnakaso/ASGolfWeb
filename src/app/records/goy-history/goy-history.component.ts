import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'as-goy-history',
  templateUrl: './goy-history.component.html',
  styleUrls: ['./goy-history.component.css']
})
export class GoyHistoryComponent implements OnInit, OnChanges {

  @Input() data: any;

  filtered: any;
  playerCounts = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if (changes.data) {
      // Don't trust data before 2000
      this.filtered = this.data
        .filter((entry: any) => entry.year >= 2000);

      var byPlayer = {};
      this.filtered.forEach((entry: any) => {
        entry.players.forEach((player: any) => {
          var count = byPlayer[player];
          byPlayer[player] = count ? count + 1 : 1;
        })
      });

      this.playerCounts = [];
      Object.keys(byPlayer).forEach((p: string) => {
        this.playerCounts.push({ player: p, count: byPlayer[p] })
      })
      this.playerCounts = this.playerCounts
        .sort((p1, p2) => p2.count - p1.count)
        .slice(0, 3);
    }
  }
}

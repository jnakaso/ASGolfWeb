import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GolfService } from '../../golf/golf.service';

@Component({
  selector: 'as-season-select',
  templateUrl: './season-select.component.html',
  styleUrls: ['./season-select.component.css']
})
export class SeasonSelectComponent implements OnInit {

  @Input() season: number;
  @Output() seasonChange = new EventEmitter();

  seasons: number[];

  constructor(private golfService: GolfService) {
  }

  ngOnInit() {
    this.seasons = this.golfService.getSeasons();
  }

  onChanges(newSeason: number) {
    if (this.season != newSeason) {
      this.season = newSeason;
      this.seasonChange.emit(this.season);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { EventsService } from '../../golf/events.service';
import { ASEvent } from '../../golf/asevent';

@Component({
  selector: 'as-full-schedule',
  templateUrl: './full-schedule.component.html',
  styleUrls: ['./full-schedule.component.css']
})
export class FullScheduleComponent implements OnInit {

  season: number;
  events: ASEvent[];

  constructor(
    private eventsService: EventsService,
    private golfService: GolfService) {

  }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(i => {
        this.season = i.currentSeason;
        this.loadEvents(this.season);
      });
  }

  seasonChange(newSeason: number) {
    let cmp = this;
    if (newSeason != undefined) {
      this.loadEvents(newSeason);
    }
  }

  loadEvents(newSeason: number) {
    this.season = newSeason;
    this.eventsService.getEvents(this.season)
      .subscribe(evts => this.events = evts);
  }

}

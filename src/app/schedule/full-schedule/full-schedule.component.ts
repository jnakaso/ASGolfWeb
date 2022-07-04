import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { EventsService } from '../../golf/events.service';
import { ASEvent } from '../../golf/asevent';

@Component({
  selector: 'as-full-schedule',
  templateUrl: './full-schedule.component.html',
  styleUrls: ['./full-schedule.component.css']
})
export class FullScheduleComponent implements OnChanges {

  @Input()
  season: number;

  events: ASEvent[];

  constructor(
    private eventsService: EventsService,
    private golfService: GolfService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.season) {
      this.loadEvents(this.season);
    }
  }


  loadEvents(newSeason: number) {
    this.season = newSeason;
    this.eventsService.getEvents(this.season)
      .subscribe(evts => this.events = evts);
  }

}

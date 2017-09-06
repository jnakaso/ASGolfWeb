import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { EventsService } from '../../golf/events.service';
import { ASEvent } from '../../golf/asevent';

@Component({
  selector: 'as-mini-on-deck',
  templateUrl: './mini-on-deck.component.html',
  styleUrls: ['./mini-on-deck.component.css']
})
export class MiniOnDeckComponent implements OnInit {

  event: ASEvent = new ASEvent();

  constructor(
    private eventsService: EventsService,
    private golfService: GolfService) {
  }
  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => { this.loadEvent(ini) });   
  }

  loadEvent(ini: any) {
    this.eventsService.getEvents(ini.currentSeason)
      .subscribe(evts => this.event = evts.find(e => e.id == ini.currentEvent));
  }
}

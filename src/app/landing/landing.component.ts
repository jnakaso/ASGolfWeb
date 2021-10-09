import { Component, OnInit } from '@angular/core';
import { EventsService } from '../golf/events.service';
import { GolfService } from '../golf/golf.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  showEvents = false;

  constructor(private golfService: GolfService) { }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini => { this.showEvents = ini.currentEvent !== null });
  }

}

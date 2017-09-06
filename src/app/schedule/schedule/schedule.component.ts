import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';

@Component({
  selector: 'as-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  private static SECTIONS = [
    { href: '#OnDeck', label: `On Deck` },
    { href: '#FullSchedule', label: `Full Schedule` }
  ];

  nextCourseId: number;
  sections = ScheduleComponent.SECTIONS;

  constructor(private golfAppService: GolfService) {
  }

  ngOnInit() {
    this.golfAppService.getInitValues()
      .subscribe(i => this.nextCourseId = i.nextCourseId);
  }

}

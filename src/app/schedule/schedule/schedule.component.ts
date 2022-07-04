import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';

@Component({
  selector: 'as-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  sections = ['OnDeck', 'FullSchedule'];
  nextCourseId: number;
  season: number;

  constructor(private golfAppService: GolfService) {
  }

  ngOnInit() {
    this.golfAppService.getInitValues()
      .subscribe(i => {
        this.nextCourseId = i.nextCourseId;
        this.season = i.currentSeason;
      });
  }

}

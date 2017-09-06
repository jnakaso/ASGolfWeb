import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../golf/information.service';

@Component({
  selector: 'as-last-minutes',
  templateUrl: './last-minutes.component.html',
  styleUrls: ['./last-minutes.component.css']
})
export class LastMinutesComponent implements OnInit {

  minutes: any;

  constructor(private informationService: InformationService) {

  }

  ngOnInit() {
    this.informationService.getMinutes()
      .subscribe(result => this.minutes = this.minutes = result[0]);
  }

}

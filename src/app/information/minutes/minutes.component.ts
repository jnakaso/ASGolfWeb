import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../golf/information.service';
@Component({
  selector: 'as-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {

  minutes: any[] = [];

  constructor(private informationService: InformationService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.informationService.getMinutes()
      .subscribe(mins => this.minutes = mins);
  }

}

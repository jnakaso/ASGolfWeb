import { Component, OnInit } from '@angular/core';
import { ASAnnouncement } from '../../golf/asannouncement';
import { InformationService } from '../../golf/information.service';

@Component({
  selector: 'as-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  current: string;

  constructor(
    private informationService: InformationService) {
  }

  ngOnInit() {
    this.informationService.getMdAnnouncements()
      .subscribe(anns =>
        this.informationService.getMdText(anns[0])
          .subscribe(t => this.current = t)
      );
  }

}

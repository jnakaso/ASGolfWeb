import { Component, OnInit } from '@angular/core';
import { ASAnnouncement } from '../../golf/asannouncement';
import { InformationService } from '../../golf/information.service';

@Component({
  selector: 'as-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcement: ASAnnouncement;

  constructor(
    private informationService: InformationService) {
  }

  ngOnInit() {
    this.informationService.getAnnouncements()
      .subscribe(anns => this.announcement = anns[0]);

  }

}

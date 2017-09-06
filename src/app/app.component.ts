import { Component } from '@angular/core';
import { GolfService } from './golf/golf.service';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AS Golf';
  constructor(public golfService: GolfService) {
    PageScrollConfig.defaultScrollOffset = 70;
    PageScrollConfig.defaultDuration = 500;
  }
}

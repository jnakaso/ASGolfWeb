import { Component } from '@angular/core';
import { GolfService } from './golf/golf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AS Golf';
  constructor(public golfService: GolfService) {
  }
}

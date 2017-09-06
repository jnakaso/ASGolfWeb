import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-birdies',
  templateUrl: './birdies.component.html',
  styleUrls: ['./birdies.component.css']
})
export class BirdiesComponent {
  @Input() season: number;
  @Input() data: any;
}

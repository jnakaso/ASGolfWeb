import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-birdies',
  templateUrl: './birdies.component.html',
  styleUrls: ['./birdies.component.css']
})
export class BirdiesComponent {
  @Input() season: number;
  @Input() data: any;

  calcMore(entry: any) {
    let total = 0;
    for (let i = 3; i <= 10; i++) {
      total += entry[i] ? entry[i] : 0;
    }
    return total;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-money-player',
  templateUrl: './money-player.component.html',
  styleUrls: ['./money-player.component.css']
})
export class MoneyPlayerComponent {

  @Input() data: any;
  activeOnly: boolean = true;

  filteredData() {
    if (!this.data) {
      return [];
    }
    if (this.activeOnly) {
      return this.data.filter(d => d.active);
    } else {
      return this.data;
    }
  }

}

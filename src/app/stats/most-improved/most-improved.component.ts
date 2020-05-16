import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'as-most-improved',
  templateUrl: './most-improved.component.html',
  styleUrls: ['./most-improved.component.css']
})
export class MostImprovedComponent implements OnChanges {

  @Input() season: number;
  @Input() data: any;

  ngOnChanges(change: SimpleChanges) {
    if (change.data) {
      this.data = change.data.currentValue.sort((o1, o2) => o1.percentChange - o2.percentChange);
    }
  }
}

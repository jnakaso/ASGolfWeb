import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'as-hole-in-ones',
  templateUrl: './hole-in-ones.component.html',
  styleUrls: ['./hole-in-ones.component.css']
})
export class HoleInOnesComponent implements OnChanges {

  @Input()
  data: any[];
  sorted: any[];


  ngOnChanges(changes) {
    if (this.data) {
      this.sorted = this.data.sort((e1, e2) =>
        new Date(e2['playDate']).getTime() - new Date(e1['playDate']).getTime());
    }
  }

}

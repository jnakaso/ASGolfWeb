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
    if (changes.data) {
      this.sorted = this.data
        .map(e => Object.assign(e, { date: this.parse(e.playDate) }))
        .sort((e1, e2) => e1.date.getTime() - e2.date.getTime());
    }
  }

  parse(str: string) {
    const parts = str.split("-");
    return new Date(parseInt(parts[2], 10),
      parseInt(parts[0], 10) - 1,
      parseInt(parts[1], 10))
  }
}

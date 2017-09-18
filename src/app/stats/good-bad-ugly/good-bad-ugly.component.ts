import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-good-bad-ugly',
  templateUrl: './good-bad-ugly.component.html',
  styleUrls: ['./good-bad-ugly.component.css']
})
export class GoodBadUglyComponent {

  @Input() season: number;
  @Input() data: any = {};

  getRounds(section: string) {
    return this.data[section] ? this.data[section].rounds : [];
  }
}

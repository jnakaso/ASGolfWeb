import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-sandbagger',
  templateUrl: './sandbagger.component.html',
  styleUrls: ['./sandbagger.component.css']
})
export class SandbaggerComponent {

  @Input() season: number;
  @Input() data: any;

}

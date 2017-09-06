import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-three-putt',
  templateUrl: './three-putt.component.html',
  styleUrls: ['./three-putt.component.css']
})
export class ThreePuttComponent {

  @Input() season: number;
  @Input() good: any;
  @Input() bad: any;

}

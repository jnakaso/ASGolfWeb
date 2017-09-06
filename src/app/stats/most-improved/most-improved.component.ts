import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-most-improved',
  templateUrl: './most-improved.component.html',
  styleUrls: ['./most-improved.component.css']
})
export class MostImprovedComponent {

  @Input() season: number;
  @Input() data: any;

}

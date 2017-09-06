import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-hole-in-ones',
  templateUrl: './hole-in-ones.component.html',
  styleUrls: ['./hole-in-ones.component.css']
})
export class HoleInOnesComponent {

  @Input() data: any;

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-kp-sweeper',
  templateUrl: './kp-sweeper.component.html',
  styleUrls: ['./kp-sweeper.component.css']
})
export class KpSweeperComponent {
  @Input() data: any;
}

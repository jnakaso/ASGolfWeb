import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-vardon',
  templateUrl: './vardon.component.html',
  styleUrls: ['./vardon.component.css']
})
export class VardonComponent {

  @Input() season: number;
  @Input() data: any;

}

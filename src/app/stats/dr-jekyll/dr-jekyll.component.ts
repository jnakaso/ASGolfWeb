import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-dr-jekyll',
  templateUrl: './dr-jekyll.component.html',
  styleUrls: ['./dr-jekyll.component.css']
})
export class DrJekyllComponent {

  @Input() season: number;
  @Input() data: any;


}

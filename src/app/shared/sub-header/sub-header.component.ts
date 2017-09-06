import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent  {

  @Input() title: string;
  @Input() hideTop: boolean = false;

  scroll() {
    window.scrollTo(0, 0);
  }

}

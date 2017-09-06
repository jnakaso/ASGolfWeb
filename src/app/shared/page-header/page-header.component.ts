import { Component, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item';

@Component({
  selector: 'as-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {

  @Input()
  title: string;
  @Input()
  links: NavbarItem[];

}

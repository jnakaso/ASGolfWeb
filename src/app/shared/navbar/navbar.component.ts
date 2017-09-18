import { Component, OnInit, Input } from '@angular/core';
import { NavbarItem } from '../navbar-item';

@Component({
  selector: 'as-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() brand: NavbarItem = new NavbarItem('', '');
  @Input() sponsor: NavbarItem = new NavbarItem('', '');
  @Input() sections: NavbarItem[] = [];

  public hideSections = true;

  constructor() {
  }

  ngOnInit() {
  }

  offMenu() {
    this.hideSections = true;
  }

  toggleMenu() {
    this.hideSections = !this.hideSections;
  }
}

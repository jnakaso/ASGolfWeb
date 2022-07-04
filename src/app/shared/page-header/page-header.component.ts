import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  accordion;

  showAll = true;

  @Input()
  item;

  @Input()
  items;

  @Output()
  itemChange = new EventEmitter();

  toggle() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.accordion.expandAll();
    } else {
      this.accordion.collapseAll();
    }
  }

  changeItem(newItem) {
    this.item = newItem;
    this.itemChange.emit(this.item);
  }

}

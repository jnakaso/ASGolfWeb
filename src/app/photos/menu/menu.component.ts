import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'as-photo-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MenuComponent implements OnInit {

  menuState: string = 'out';
  @Input()
  sections: any[] = [];
  @Output()
  selectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.toggleMenu();
  }

  changeFolder(selected: string, event: Event) {
    this.selectedEvent.emit(selected);
    this.toggleMenu();
    event.stopPropagation();
  }

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}

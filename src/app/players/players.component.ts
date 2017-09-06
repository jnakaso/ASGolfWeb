import { Component, OnInit } from '@angular/core';

const SECTIONS = [
  { href: '#Balance', label: 'Balance' },
  { href: '#Handicaps', label: 'Handicaps' }
];

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  sections = SECTIONS;
  constructor() { }

  ngOnInit() {
  }

}

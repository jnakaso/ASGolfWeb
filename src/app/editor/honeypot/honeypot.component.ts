import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { ASHoneypot } from '../../golf/model/ashoneypot';

@Component({
  selector: 'as-honeypot',
  templateUrl: './honeypot.component.html',
  styleUrls: ['./honeypot.component.css']
})
export class HoneypotComponent implements OnChanges {

  @Input()
  tournament: ASTournamentSummary;

  honeypot: ASHoneypot = new ASHoneypot({});

  constructor() { }

  ngOnChanges() {
    if (this.tournament.honeypot) {
      this.honeypot = this.tournament.honeypot;
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { TournamentService } from '../tournament.service';

@Component({
  selector: 'as-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  flights = this.tournamentService.flights;

  @Input()
  tournament: ASTournamentSummary;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit() {
  }

  getWinners(flt) {
    return this.tournament.winners.filter(el => el.flight === flt);
  }

}

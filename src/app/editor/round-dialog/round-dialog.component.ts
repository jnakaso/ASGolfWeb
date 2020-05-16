import { Component, OnInit } from '@angular/core';
import { ASPlayer } from '../../golf/asplayer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayersService } from '../../golf/players.service';
import { ASRound } from '../../golf/model/asround';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { TournamentService } from '../tournament.service';
import { RoundsService } from '../rounds.service';

@Component({
  selector: 'as-round-dialog',
  templateUrl: './round-dialog.component.html',
  styleUrls: ['./round-dialog.component.css']
})
export class RoundDialogComponent implements OnInit {

  flights = ['A', 'B'];
  activePlayers: ASPlayer[] = [];
  round: ASRound;
  tournament: ASTournamentSummary;

  constructor(
    private modal: NgbActiveModal,
    private playersService: PlayersService,
    private tournamentService: TournamentService,
    private roundsService: RoundsService
  ) { }

  ngOnInit() {
    this.playersService.getPlayers()
      .subscribe(pp => this.activePlayers = pp
        .filter(player => player.active)
        .sort((p1, p2) => p1.firstName.localeCompare(p2.firstName)));
  }

  changePlayer(playerId: number) {
    const pNumber = Number(playerId);
    this.round.playerID = pNumber;
    const player = this.activePlayers.find(pp => pp.id === pNumber);
    this.round.player = player.firstName + ' ' + player.lastName;
    this.round.hdcp = this.calcAdjustedHandicap(player, this.tournament)
    this.roundsService.updateRoundTotals(this.round);
  }

  changeScore(event) {
    this.roundsService.updateRoundTotals(this.round);
  }

  calcAdjustedHandicap(player, tournament: ASTournamentSummary): number {
    return this.tournamentService.calcAdjustedHandicap(player, tournament);
  }
  
  cancel() {
    this.modal.dismiss();
  }

  ok() {
    this.modal.close(this.round);
  }

}

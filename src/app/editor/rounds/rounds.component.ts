import { Component, OnInit, Input } from '@angular/core';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { TournamentService } from '../tournament.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoundDialogComponent } from '../round-dialog/round-dialog.component';
import { ASRound } from '../../golf/model/asround';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'as-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  
  @Input()
  tournament: ASTournamentSummary;

  constructor(
    private tournamentService: TournamentService,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  getRounds() {
    console.log(this.tournament.rounds);
    return this.tournament.rounds;
  }

  newRound() {
    const modalRef = this.modalService.open(RoundDialogComponent, { size: 'lg' });
    modalRef.componentInstance.round = this.tournamentService.createRound();
    modalRef.componentInstance.tournament = this.tournament;
    modalRef.result.then(updated => {
      if (updated) {
        this.tournamentService.addRound(this.tournament, updated)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }

  editRound(round: ASRound) {
    const modalRef = this.modalService.open(RoundDialogComponent, { size: 'lg' });
    modalRef.componentInstance.round = new ASRound(round);
    modalRef.componentInstance.tournament = this.tournament;
    modalRef.result.then(updated => {
      if (updated) {
        Object.assign(round, updated);
        this.tournamentService.updateRound(this.tournament, round)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }

  deleteRound(round: ASRound) {
    const modalRef = this.modalService.open(ConfirmationDialogComponent);
    modalRef.componentInstance.title = 'Delete Round';
    modalRef.componentInstance.message = `Delete ${round.player}'s round?  Please confirm.`;
    modalRef.result.then(confirmed => {
      if (confirmed) {
        this.tournamentService.deleteRound(this.tournament, round)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }

}

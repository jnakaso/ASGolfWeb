import { Component, OnInit } from '@angular/core';
import { ASTournament } from '../../golf/astournament';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { TournamentService } from '../tournament.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { KpDialogComponent } from '../kp-dialog/kp-dialog.component';
import { ASKp } from '../../golf/model/askp';
import { ASRound } from '../../golf/model/asround';
import { RoundDialogComponent } from '../round-dialog/round-dialog.component';

@Component({
  selector: 'as-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament: ASTournamentSummary;
  flights = this.tournamentService.flights;

  constructor(
    private tournamentService: TournamentService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.tournament = this.tournamentService.createSummary();
  }

  sendTournament() {
		var info = encodeURI('ASGolf : ' + this.tournament.info.courseName + ' : ' + this.tournament.info.date);
		var tour = JSON.stringify(this.tournament);
		window.open( 'mailto:jnakaso@yahoo.com?Subject=' + info +'&Body=' + tour);
  }

  newTournament() {
    const modalRef = this.modalService.open(ConfirmationDialogComponent);
    modalRef.componentInstance.title = 'New Tournament';
    modalRef.componentInstance.message = 'This will erase the current tournament.  Please confirm.';
    modalRef.result.then(confirmed => {
      if (confirmed) {
        this.tournament = this.tournamentService.createSummary();
      }
    });
  }

  editInfo() {
    const modalRef = this.modalService.open(InfoDialogComponent);
    modalRef.componentInstance.info = new ASTournament(this.tournament.info);
    modalRef.result.then(result => {
      this.tournament.info = result;
    });
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
  newKp() {
    const modalRef = this.modalService.open(KpDialogComponent);
    modalRef.componentInstance.kp = new ASKp({});
    modalRef.result.then(updated => {
      if (updated) {
        this.tournamentService.addKp(this.tournament, updated)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }

}

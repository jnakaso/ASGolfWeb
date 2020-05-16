import { Component, OnInit, Inject } from '@angular/core';
import { ASTournament } from '../../golf/astournament';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { TournamentService } from '../tournament.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { KpDialogComponent } from '../kp-dialog/kp-dialog.component';
import { ASKp } from '../../golf/model/askp';
import { RoundDialogComponent } from '../round-dialog/round-dialog.component';
import { environment } from '../../../environments/environment';
import { GolfService } from '../../golf/golf.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'as-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament: ASTournamentSummary;
  flights = this.tournamentService.flights;
  env = environment;
  season: number;

  constructor(
    private golfService: GolfService,
    private tournamentService: TournamentService,
    private modalService: NgbModal,
    public toastService: ToastService) { }

  ngOnInit() {
    this.golfService.getInitValues().subscribe(
      init => this.season = init.currentSeason
    );
    this.tournament = this.tournamentService.createSummary();
  }

  saveTournament() {
    this.tournamentService.saveTournament(this.season, this.tournament)
      .subscribe(
        updated => {
          this.changeTournament(updated);
        },
        err => {
          console.log(err);
          this.toastService.show('Error: ', err.message);
        });
  }

  changeTournament(tour: any) {
    this.tournament = tour;
    this.toastService.show(
      'Done!', `Created tournament ${this.tournament.tournament.courseName} (${this.tournament.id})`);
  }

  sendTournament() {
    var info = encodeURI('ASGolf : ' + this.tournament.tournament.courseName + ' : ' + this.tournament.tournament.date);
    var tour = JSON.stringify(this.tournament);
    window.open('mailto:jnakaso@yahoo.com?Subject=' + info + '&Body=' + tour);
  }

  newTournament() {
    const modalRef = this.modalService.open(ConfirmationDialogComponent);
    modalRef.componentInstance.title = 'New Tournament';
    modalRef.componentInstance.message = 'This will erase the current tournament.  Please confirm.';
    modalRef.result.then(
      confirmed => {
        if (confirmed) {
          this.tournament = this.tournamentService.createSummary();
        }
      }, err => { });
  }

  editInfo() {
    const modalRef = this.modalService.open(InfoDialogComponent);
    modalRef.componentInstance.info = new ASTournament(this.tournament.tournament);
    modalRef.result.then(
      result => {
        if (result) {
          this.tournament.tournament = result;
        }
      }, err => { });
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

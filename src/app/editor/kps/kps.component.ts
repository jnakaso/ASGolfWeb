import { Component, OnInit, Input } from '@angular/core';
import { ASTournamentSummary } from '../../golf/model/astournament-summary';
import { KpDialogComponent } from '../kp-dialog/kp-dialog.component';
import { ASKp } from '../../golf/model/askp';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { TournamentService } from '../tournament.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'as-kps',
  templateUrl: './kps.component.html',
  styleUrls: ['./kps.component.css']
})
export class KpsComponent implements OnInit {

  flights = this.tournamentService.flights;

  @Input()
  tournament: ASTournamentSummary;

  constructor(
    private tournamentService: TournamentService,
    private modalService: NgbModal) { }

  ngOnInit() {
  }

  getKps(flt) {
    return this.tournament.kps
      .filter(kp => kp.flight === flt)
      .sort((kp1, kp2) => kp1.hole - kp2.hole);
  }

  newKp(flt) {
    const modalRef = this.modalService.open(KpDialogComponent);
    modalRef.componentInstance.kp = new ASKp({ flight: flt });
    modalRef.result.then(updated => {
      if (updated) {
        this.tournamentService.addKp(this.tournament, updated)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }

  editKp(kp) {
    const modalRef = this.modalService.open(KpDialogComponent);
    modalRef.componentInstance.kp = new ASKp(kp);
    modalRef.result.then(updated => {
      if (updated) {
        Object.assign(kp, updated);
        this.tournamentService.updateKp(this.tournament, kp)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }

  deleteKp(kp: ASKp) {
    const modalRef = this.modalService.open(ConfirmationDialogComponent);
    modalRef.componentInstance.title = 'Delete KP';
    modalRef.componentInstance.message = `Delete ${kp.player}'s hard earned KP?  Please confirm.`;
    modalRef.result.then(confirmed => {
      if (confirmed) {
        this.tournamentService.deleteKp(this.tournament, kp)
          .subscribe(tt => this.tournament = tt);
      }
    }, err => { });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayersService } from '../../golf/players.service';
import { ASKp } from '../../golf/model/askp';
import { ASPlayer } from '../../golf/asplayer';

@Component({
  selector: 'as-kp-dialog',
  templateUrl: './kp-dialog.component.html',
  styleUrls: ['./kp-dialog.component.css']
})
export class KpDialogComponent implements OnInit {

  flights = ['A', 'B'];
  kp: ASKp;
  activePlayers: ASPlayer[] = [];

  constructor(
    private modal: NgbActiveModal,
    private playersService: PlayersService
  ) { }

  ngOnInit() {
    this.playersService.getPlayers()
      .subscribe(pp => this.activePlayers = pp
        .filter(player => player.active)
        .sort((p1, p2) => p1.firstName.localeCompare(p2.firstName)));
  }
  
  changePlayer(playerId: number) {
    const pNumber = Number(playerId);
    this.kp.playerID = pNumber;
    const player = this.activePlayers.find(pp => pp.id === pNumber);
    this.kp.player = player.firstName + ' ' + player.lastName;
  }

  cancel() {
    this.modal.dismiss();
  }

  ok() {
    this.modal.close(this.kp);
  }
}

import { Component, OnInit } from '@angular/core';
import { GolfService } from '../../golf/golf.service';
import { ASBalance } from '../../golf/asbalance';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  balances: ASBalance = new ASBalance();

  constructor(
    private golfService: GolfService,
    private playersService: PlayersService) {
  }

  ngOnInit() {
    this.golfService.getInitValues()
      .subscribe(ini =>
        this.playersService.getBalances(ini.currentSeason)
          .subscribe(bal => this.balances = bal)
      );
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { GolfModule } from '../golf/golf.module';
import { PlayersComponent } from './players.component';
import { HandicapsComponent } from './handicaps/handicaps.component';
import { BalanceComponent } from './balance/balance.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'players',
        component: PlayersComponent
      }
    ]),
    NgbModule.forRoot(),
    SharedModule,
    GolfModule
  ],
  declarations: [PlayersComponent, HandicapsComponent, BalanceComponent]
})
export class PlayersModule { }

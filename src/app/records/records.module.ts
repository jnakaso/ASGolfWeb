import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

import { RecordsComponent } from './records/records.component';
import { KpSweeperComponent } from './kp-sweeper/kp-sweeper.component';
import { MoneyPlayerComponent } from './money-player/money-player.component';
import { WhereWePlayedComponent } from './where-we-played/where-we-played.component';
import { HoleInOnesComponent } from './hole-in-ones/hole-in-ones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'records',
        component: RecordsComponent
      }
    ]),
    NgbModule.forRoot(),
    SharedModule
  ],
  declarations: [
    RecordsComponent,
    KpSweeperComponent,
    MoneyPlayerComponent,
    WhereWePlayedComponent,
    HoleInOnesComponent]
})
export class RecordsModule { }

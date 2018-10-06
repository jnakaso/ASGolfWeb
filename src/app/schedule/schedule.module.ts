import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { GolfModule } from '../golf/golf.module';

import { ScheduleComponent } from './schedule/schedule.component';
import { FullScheduleComponent } from './full-schedule/full-schedule.component';
import { OnDeckComponent } from './on-deck/on-deck.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'schedule',
        component: ScheduleComponent
      }
    ]),
    NgbModule,
    SharedModule,
    GolfModule
  ],
  declarations: [
    ScheduleComponent,
    FullScheduleComponent,
    OnDeckComponent]
})
export class ScheduleModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { SharedModule } from '../shared/shared.module';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsSummaryComponent } from './tournaments-summary/tournaments-summary.component';
import { TournamentsTwoDayComponent } from './tournaments-two-day/tournaments-two-day.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TournamentSingleComponent } from './tournament-single/tournament-single.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'tournaments',
        component: TournamentsComponent
      },
      {
        path: 'tournament/:season/:id',
        component: TournamentSingleComponent
      }
    ]),
    NgbModule.forRoot(),
    Ng2PageScrollModule,
    SharedModule
  ],
  declarations: [
    TournamentsComponent,
    TournamentsSummaryComponent,
    TournamentsTwoDayComponent,
    TournamentComponent,
    TournamentSingleComponent]
})
export class TournamentsModule { }

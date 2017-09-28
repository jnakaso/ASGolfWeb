import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html'

import { AsStandingsComponent } from './as-standings/as-standings.component';
import { LandingComponent } from './landing.component';
import { MiniOnDeckComponent } from './mini-on-deck/mini-on-deck.component';
import { MiniTwoDayComponent } from './mini-two-day/mini-two-day.component';
import { LastTournamentComponent } from './last-tournament/last-tournament.component';
import { FunniesComponent } from './funnies/funnies.component';
import { FunniesService } from './funnies/funnies.service';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { LastMinutesComponent } from './last-minutes/last-minutes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'landing',
        component: LandingComponent
      }
    ]),
    MarkdownToHtmlModule.forRoot()
  ],
  declarations: [
    AsStandingsComponent,
    LandingComponent,
    MiniOnDeckComponent,
    MiniTwoDayComponent,
    LastTournamentComponent,
    FunniesComponent,
    AnnouncementsComponent,
    LastMinutesComponent
  ],
  providers: [
    FunniesService
  ],
  exports: [
    AsStandingsComponent,
    LandingComponent
  ]
})
export class LandingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { GolfModule } from '../golf/golf.module';
import { CompactPipe } from './compact.pipe';
import { TournamentService } from './tournament.service';
import { RoundDialogComponent } from './round-dialog/round-dialog.component';
import { KpDialogComponent } from './kp-dialog/kp-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FormsModule } from '@angular/forms';
import { HoneypotService } from './honeypot.service';
import { KpsComponent } from './kps/kps.component';
import { RoundsComponent } from './rounds/rounds.component';
import { WinnersComponent } from './winners/winners.component';
import { HoneypotComponent } from './honeypot/honeypot.component';
import { ScoringService } from './scoring.service';
import { RoundsService } from './rounds.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'editor',
        component: TournamentComponent
      }
    ]),
    FormsModule,
    NgbModule.forRoot(),
    SharedModule,
    GolfModule
  ],
  declarations: [
    TournamentComponent,
    CompactPipe,
    RoundDialogComponent,
    KpDialogComponent,
    InfoDialogComponent,
    ConfirmationDialogComponent,
    KpsComponent,
    RoundsComponent,
    WinnersComponent,
    HoneypotComponent],
  entryComponents: [
    ConfirmationDialogComponent,
    InfoDialogComponent,
    RoundDialogComponent,
    KpDialogComponent
  ],
  providers: [
    TournamentService,
    ScoringService,
    HoneypotService,
    RoundsService]
})
export class EditorModule { }
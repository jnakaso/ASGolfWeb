import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { StatsModule } from './stats/stats.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { PlayersModule } from './players/players.module';
import { LandingModule } from './landing/landing.module';
import { ScheduleModule } from './schedule/schedule.module';
import { RecordsModule } from './records/records.module';
import { PhotosModule } from './photos/photos.module';
import { InformationModule } from './information/information.module';
import { GolfModule } from './golf/golf.module';

import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full',

      }],
      { useHash: true }),
    BrowserAnimationsModule,

    SharedModule,
    StatsModule,
    TournamentsModule,
    PlayersModule,
    LandingModule,
    ScheduleModule,
    RecordsModule,
    PhotosModule,
    InformationModule,
    EditorModule,
    GolfModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




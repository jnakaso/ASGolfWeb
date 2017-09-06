import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GolfService } from './golf.service';
import { CoursesService } from './courses.service';
import { EventsService } from './events.service';
import { InformationService } from './information.service';
import { TournamentsService } from './tournaments.service';
import { PlayersService } from './players.service';
import { StatsService } from './stats.service';
import { PhotosService } from './photos.service';
import { ASSlopeAdjustedPipe } from './asslope-adjusted.pipe';
import { ASNamePipe } from './asname.pipe';
import { ASActivePlayerPipe } from './asactive-player.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ASSlopeAdjustedPipe, ASNamePipe, ASActivePlayerPipe
  ],
  providers: [
    GolfService,
    CoursesService,
    EventsService,
    InformationService,
    TournamentsService,
    PlayersService,
    StatsService,
    PhotosService],
  declarations: [ASSlopeAdjustedPipe, ASNamePipe, ASActivePlayerPipe]
})
export class GolfModule { }

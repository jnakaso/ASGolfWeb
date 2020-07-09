import { NgModule } from '@angular/core';
import { GolfService } from './golf.service';
import { CoursesService } from './courses.service';
import { EventsService } from './events.service';
import { InformationService } from './information.service';
import { TournamentsService } from './tournaments.service';
import { PlayersService } from './players.service';
import { StatsService } from './stats.service';
import { PhotosService } from './photos.service';
import { ASSlopeAdjustedPipe } from './asslope-adjusted.pipe';
import { ASCourseNamePipe } from './as-course-name.pipe';
import { ASActivePlayerPipe } from './asactive-player.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ASSlopeAdjustedPipe, ASCourseNamePipe, ASActivePlayerPipe
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
  declarations: [
    ASSlopeAdjustedPipe,
    ASCourseNamePipe,
    ASActivePlayerPipe]
})
export class GolfModule { }

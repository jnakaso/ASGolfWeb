import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { StatsComponent } from './stats/stats.component';
import { StandingsComponent } from './standings/standings.component';
import { VardonComponent } from './vardon/vardon.component';
import { SandbaggerComponent } from './sandbagger/sandbagger.component';
import { MostImprovedComponent } from './most-improved/most-improved.component';
import { BirdiesComponent } from './birdies/birdies.component';
import { GoodBadUglyComponent } from './good-bad-ugly/good-bad-ugly.component';
import { ThreePuttComponent } from './three-putt/three-putt.component';
import { DrJekyllComponent } from './dr-jekyll/dr-jekyll.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'stats',
        component: StatsComponent
      }
    ]),
    NgbModule,
    SharedModule
  ],
  providers: [],
  declarations: [StatsComponent, StandingsComponent, VardonComponent, SandbaggerComponent, MostImprovedComponent, BirdiesComponent, GoodBadUglyComponent, ThreePuttComponent, DrJekyllComponent]
})
export class StatsModule { }

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { GolfModule } from '../golf/golf.module';

import { LandingComponent } from './landing.component';
import { MiniOnDeckComponent } from './mini-on-deck/mini-on-deck.component';
import { AsStandingsComponent } from './as-standings/as-standings.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { MiniTwoDayComponent } from './mini-two-day/mini-two-day.component';
import { LastTournamentComponent } from './last-tournament/last-tournament.component';
import { FunniesComponent } from './funnies/funnies.component';
import { LastMinutesComponent } from './last-minutes/last-minutes.component';
import { FunniesService } from './funnies/funnies.service';
import { MarkdownModule } from 'ngx-markdown';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MarkdownModule,
        GolfModule],
      declarations: [
        LandingComponent,
        MiniOnDeckComponent,
        AsStandingsComponent,
        AnnouncementsComponent,
        MiniTwoDayComponent,
        LastTournamentComponent,
        FunniesComponent,
        LastMinutesComponent],
      providers: [FunniesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

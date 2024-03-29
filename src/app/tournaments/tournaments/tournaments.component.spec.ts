import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { TournamentsComponent } from './tournaments.component';
import { TournamentsTwoDayComponent } from '../tournaments-two-day/tournaments-two-day.component';
import { TournamentsSummaryComponent } from '../tournaments-summary/tournaments-summary.component';
import { TournamentComponent } from '../tournament/tournament.component';

describe('TournamentsComponent', () => {
  let component: TournamentsComponent;
  let fixture: ComponentFixture<TournamentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule,
        HttpClientModule,
        NoopAnimationsModule,
        SharedModule,
        GolfModule
      ],
      declarations: [
        TournamentsComponent,
        TournamentsTwoDayComponent,
        TournamentsSummaryComponent,
        TournamentComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

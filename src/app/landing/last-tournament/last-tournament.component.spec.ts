import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { LastTournamentComponent } from './last-tournament.component';
import { GolfService } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';

describe('LastTournamentComponent', () => {
  let component: LastTournamentComponent;
  let fixture: ComponentFixture<LastTournamentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [LastTournamentComponent],
      providers: [GolfService, TournamentsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

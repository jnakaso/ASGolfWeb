import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModuledule } from '@angular/http';

import { LastTournamentComponent } from './last-tournament.component';
import { GolfService } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';

describe('LastTournamentComponent', () => {
  let component: LastTournamentComponent;
  let fixture: ComponentFixture<LastTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModuledule],
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

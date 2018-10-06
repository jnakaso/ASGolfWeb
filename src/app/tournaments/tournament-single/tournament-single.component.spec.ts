import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { TournamentSingleComponent } from './tournament-single.component';
import { TournamentComponent } from '../tournament/tournament.component';

describe('TournamentSingleComponent', () => {
  let component: TournamentSingleComponent;
  let fixture: ComponentFixture<TournamentSingleComponent>;

  let mockRoute = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        SharedModule,
        GolfModule],
      declarations: [
        TournamentSingleComponent,
        TournamentComponent],
      // providers: [{
      //   provider: ActivatedRoute,
      //   useValue: {
      //     params: {
      //       season: 2017,
      //       id: 123
      //     }
      //   }
      // }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created with some params', () => {
  //   expect(component).toBeTruthy();
  //   expect(component.season).toBe(2017);
  //   expect(component.tournamentId).toBe(123);
  // });


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { TournamentSingleComponent } from './tournament-single.component';
import { TournamentComponent } from '../tournament/tournament.component';

describe('TournamentSingleComponent', () => {
  let component: TournamentSingleComponent;
  let fixture: ComponentFixture<TournamentSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpModule,
        SharedModule,
        GolfModule],
      declarations: [
        TournamentSingleComponent,
        TournamentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

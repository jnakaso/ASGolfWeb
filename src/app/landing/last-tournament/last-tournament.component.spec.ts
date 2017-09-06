import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTournamentComponent } from './last-tournament.component';

describe('LastTournamentComponent', () => {
  let component: LastTournamentComponent;
  let fixture: ComponentFixture<LastTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTournamentComponent ]
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsSummaryComponent } from './tournaments-summary.component';

describe('TournamentsSummaryComponent', () => {
  let component: TournamentsSummaryComponent;
  let fixture: ComponentFixture<TournamentsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsTwoDayComponent } from './tournaments-two-day.component';

describe('TournamentsTwoDayComponent', () => {
  let component: TournamentsTwoDayComponent;
  let fixture: ComponentFixture<TournamentsTwoDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentsTwoDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsTwoDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

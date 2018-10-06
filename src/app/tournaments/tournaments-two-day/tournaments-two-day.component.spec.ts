import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { TournamentsTwoDayComponent } from './tournaments-two-day.component';

describe('TournamentsTwoDayComponent', () => {
  let component: TournamentsTwoDayComponent;
  let fixture: ComponentFixture<TournamentsTwoDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModuledule,
        SharedModule,
        GolfModule],
      declarations: [TournamentsTwoDayComponent]
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

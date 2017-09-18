import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MiniTwoDayComponent } from './mini-two-day.component';
import { GolfService } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';

describe('MiniTwoDayComponent', () => {
  let component: MiniTwoDayComponent;
  let fixture: ComponentFixture<MiniTwoDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [MiniTwoDayComponent],
      providers: [
        GolfService,
        TournamentsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTwoDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

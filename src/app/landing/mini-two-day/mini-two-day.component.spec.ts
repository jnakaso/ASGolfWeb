import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MiniTwoDayComponent } from './mini-two-day.component';
import { GolfService } from '../../golf/golf.service';
import { TournamentsService } from '../../golf/tournaments.service';

describe('MiniTwoDayComponent', () => {
  let component: MiniTwoDayComponent;
  let fixture: ComponentFixture<MiniTwoDayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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

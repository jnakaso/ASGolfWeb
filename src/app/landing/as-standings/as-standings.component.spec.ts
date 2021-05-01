import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AsStandingsComponent } from './as-standings.component';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';

describe('AsStandingsComponent', () => {
  let component: AsStandingsComponent;
  let fixture: ComponentFixture<AsStandingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AsStandingsComponent],
      providers: [GolfService, StatsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

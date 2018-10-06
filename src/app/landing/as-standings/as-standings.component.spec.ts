import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';

import { AsStandingsComponent } from './as-standings.component';
import { GolfService } from '../../golf/golf.service';
import { StatsService } from '../../golf/stats.service';

describe('AsStandingsComponent', () => {
  let component: AsStandingsComponent;
  let fixture: ComponentFixture<AsStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModuledule],
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

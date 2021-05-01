import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { StatsComponent } from './stats.component';
import { StandingsComponent } from '../standings/standings.component';
import { VardonComponent } from '../vardon/vardon.component';
import { SandbaggerComponent } from '../sandbagger/sandbagger.component';
import { MostImprovedComponent } from '../most-improved/most-improved.component';
import { GoodBadUglyComponent } from '../good-bad-ugly/good-bad-ugly.component';
import { BirdiesComponent } from '../birdies/birdies.component';
import { ThreePuttComponent } from '../three-putt/three-putt.component';
import { DrJekyllComponent } from '../dr-jekyll/dr-jekyll.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgbModule, NoopAnimationsModule, SharedModule, GolfModule],
      declarations: [
        StatsComponent,
        StandingsComponent,
        VardonComponent,
        SandbaggerComponent,
        MostImprovedComponent,
        GoodBadUglyComponent,
        BirdiesComponent,
        ThreePuttComponent,
        DrJekyllComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

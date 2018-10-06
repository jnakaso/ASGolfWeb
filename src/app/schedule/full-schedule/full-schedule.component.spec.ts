import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { FullScheduleComponent } from './full-schedule.component';

describe('FullScheduleComponent', () => {
  let component: FullScheduleComponent;
  let fixture: ComponentFixture<FullScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule, GolfModule],
      declarations: [FullScheduleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

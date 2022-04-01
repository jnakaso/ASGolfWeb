import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersChartComponent } from './players-chart.component';

describe('PlayersChartComponent', () => {
  let component: PlayersChartComponent;
  let fixture: ComponentFixture<PlayersChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

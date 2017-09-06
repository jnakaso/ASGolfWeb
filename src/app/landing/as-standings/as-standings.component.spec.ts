import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsStandingsComponent } from './as-standings.component';

describe('AsStandingsComponent', () => {
  let component: AsStandingsComponent;
  let fixture: ComponentFixture<AsStandingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsStandingsComponent ]
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

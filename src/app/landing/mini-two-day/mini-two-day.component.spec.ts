import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTwoDayComponent } from './mini-two-day.component';

describe('MiniTwoDayComponent', () => {
  let component: MiniTwoDayComponent;
  let fixture: ComponentFixture<MiniTwoDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniTwoDayComponent ]
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

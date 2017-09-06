import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMinutesComponent } from './last-minutes.component';

describe('LastMinutesComponent', () => {
  let component: LastMinutesComponent;
  let fixture: ComponentFixture<LastMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastMinutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreePuttComponent } from './three-putt.component';

describe('ThreePuttComponent', () => {
  let component: ThreePuttComponent;
  let fixture: ComponentFixture<ThreePuttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreePuttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreePuttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

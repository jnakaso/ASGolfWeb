import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HoneypotComponent } from './honeypot.component';

describe('HoneypotComponent', () => {
  let component: HoneypotComponent;
  let fixture: ComponentFixture<HoneypotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HoneypotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoneypotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

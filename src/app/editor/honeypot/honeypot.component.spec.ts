import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneypotComponent } from './honeypot.component';

describe('HoneypotComponent', () => {
  let component: HoneypotComponent;
  let fixture: ComponentFixture<HoneypotComponent>;

  beforeEach(async(() => {
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

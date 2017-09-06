import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDeckComponent } from './on-deck.component';

describe('OnDeckComponent', () => {
  let component: OnDeckComponent;
  let fixture: ComponentFixture<OnDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

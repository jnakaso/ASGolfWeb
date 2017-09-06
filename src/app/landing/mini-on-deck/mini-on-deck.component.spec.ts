import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniOnDeckComponent } from './mini-on-deck.component';

describe('MiniOnDeckComponent', () => {
  let component: MiniOnDeckComponent;
  let fixture: ComponentFixture<MiniOnDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniOnDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniOnDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

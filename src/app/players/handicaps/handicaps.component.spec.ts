import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandicapsComponent } from './handicaps.component';

describe('HandicapsComponent', () => {
  let component: HandicapsComponent;
  let fixture: ComponentFixture<HandicapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandicapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandicapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOutMenuComponent } from './slide-out-menu.component';

describe('SlideOutMenuComponent', () => {
  let component: SlideOutMenuComponent;
  let fixture: ComponentFixture<SlideOutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideOutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideOutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

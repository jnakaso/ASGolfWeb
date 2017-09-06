import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrJekyllComponent } from './dr-jekyll.component';

describe('DrJekyllComponent', () => {
  let component: DrJekyllComponent;
  let fixture: ComponentFixture<DrJekyllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrJekyllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrJekyllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

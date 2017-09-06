import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWePlayedComponent } from './where-we-played.component';

describe('WhereWePlayedComponent', () => {
  let component: WhereWePlayedComponent;
  let fixture: ComponentFixture<WhereWePlayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereWePlayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereWePlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

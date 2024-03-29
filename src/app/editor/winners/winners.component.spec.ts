import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WinnersComponent } from './winners.component';

describe('WinnersComponent', () => {
  let component: WinnersComponent;
  let fixture: ComponentFixture<WinnersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

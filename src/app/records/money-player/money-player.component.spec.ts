import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyPlayerComponent } from './money-player.component';

describe('MoneyPlayerComponent', () => {
  let component: MoneyPlayerComponent;
  let fixture: ComponentFixture<MoneyPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

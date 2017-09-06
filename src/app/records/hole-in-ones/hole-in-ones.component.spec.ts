import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleInOnesComponent } from './hole-in-ones.component';

describe('HoleInOnesComponent', () => {
  let component: HoleInOnesComponent;
  let fixture: ComponentFixture<HoleInOnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleInOnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleInOnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

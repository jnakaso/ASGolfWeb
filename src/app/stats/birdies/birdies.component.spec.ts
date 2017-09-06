import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdiesComponent } from './birdies.component';

describe('BirdiesComponent', () => {
  let component: BirdiesComponent;
  let fixture: ComponentFixture<BirdiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

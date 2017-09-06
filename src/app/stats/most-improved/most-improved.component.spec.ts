import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostImprovedComponent } from './most-improved.component';

describe('MostImprovedComponent', () => {
  let component: MostImprovedComponent;
  let fixture: ComponentFixture<MostImprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostImprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostImprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

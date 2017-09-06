import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VardonComponent } from './vardon.component';

describe('VardonComponent', () => {
  let component: VardonComponent;
  let fixture: ComponentFixture<VardonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VardonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VardonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

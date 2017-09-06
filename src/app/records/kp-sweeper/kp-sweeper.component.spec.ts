import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpSweeperComponent } from './kp-sweeper.component';

describe('KpSweeperComponent', () => {
  let component: KpSweeperComponent;
  let fixture: ComponentFixture<KpSweeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpSweeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpSweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

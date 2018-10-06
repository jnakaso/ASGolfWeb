import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpDialogComponent } from './kp-dialog.component';

describe('KpDialogComponent', () => {
  let component: KpDialogComponent;
  let fixture: ComponentFixture<KpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

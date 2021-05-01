import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RoundDialogComponent } from './round-dialog.component';

describe('RoundDialogComponent', () => {
  let component: RoundDialogComponent;
  let fixture: ComponentFixture<RoundDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

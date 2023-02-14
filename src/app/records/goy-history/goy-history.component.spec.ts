import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoyHistoryComponent } from './goy-history.component';

describe('GoyHistoryComponent', () => {
  let component: GoyHistoryComponent;
  let fixture: ComponentFixture<GoyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoyHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

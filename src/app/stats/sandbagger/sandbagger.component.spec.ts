import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandbaggerComponent } from './sandbagger.component';

describe('SandbaggerComponent', () => {
  let component: SandbaggerComponent;
  let fixture: ComponentFixture<SandbaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandbaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandbaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

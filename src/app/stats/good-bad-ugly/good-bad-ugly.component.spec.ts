import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared/shared.module';
import { GoodBadUglyComponent } from './good-bad-ugly.component';

describe('GoodBadUglyComponent', () => {
  let component: GoodBadUglyComponent;
  let fixture: ComponentFixture<GoodBadUglyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [GoodBadUglyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodBadUglyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

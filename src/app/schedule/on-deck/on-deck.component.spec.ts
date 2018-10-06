import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { OnDeckComponent } from './on-deck.component';

describe('OnDeckComponent', () => {
  let component: OnDeckComponent;
  let fixture: ComponentFixture<OnDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, SharedModule, GolfModule],
      declarations: [OnDeckComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

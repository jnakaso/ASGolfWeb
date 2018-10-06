import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';

import { MiniOnDeckComponent } from './mini-on-deck.component';
import { EventsService } from '../../golf/events.service';
import { GolfService } from '../../golf/golf.service';

describe('MiniOnDeckComponent', () => {
  let component: MiniOnDeckComponent;
  let fixture: ComponentFixture<MiniOnDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModuledule],
      declarations: [MiniOnDeckComponent],
      providers: [EventsService, GolfService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniOnDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

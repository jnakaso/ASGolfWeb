import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule} from '../shared/shared.module';
import { GolfModule } from '../golf/golf.module';
import { PlayersComponent } from './players.component';
import { BalanceComponent } from './balance/balance.component';
import { HandicapsComponent } from './handicaps/handicaps.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, SharedModule, GolfModule, NoopAnimationsModule],
      declarations: [
        PlayersComponent,
        BalanceComponent,
        HandicapsComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

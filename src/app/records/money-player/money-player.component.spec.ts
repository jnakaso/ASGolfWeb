import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { MoneyPlayerComponent } from './money-player.component';

describe('MoneyPlayerComponent', () => {
  let component: MoneyPlayerComponent;
  let fixture: ComponentFixture<MoneyPlayerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, SharedModule, GolfModule],
      declarations: [MoneyPlayerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

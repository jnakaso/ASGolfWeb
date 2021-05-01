import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GolfModule } from '../../golf/golf.module';
import { SeasonSelectComponent } from './season-select.component';

describe('SeasonSelectComponent', () => {
  let component: SeasonSelectComponent;
  let fixture: ComponentFixture<SeasonSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, GolfModule],
      declarations: [SeasonSelectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

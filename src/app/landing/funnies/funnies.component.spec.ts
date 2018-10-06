import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FunniesComponent } from './funnies.component';
import { FunniesService } from './funnies.service';

describe('FunniesComponent', () => {
  let component: FunniesComponent;
  let fixture: ComponentFixture<FunniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FunniesComponent],
      providers: [FunniesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

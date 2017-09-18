import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { FunniesComponent } from './funnies.component';
import { FunniesService } from './funnies.service';

describe('FunniesComponent', () => {
  let component: FunniesComponent;
  let fixture: ComponentFixture<FunniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
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

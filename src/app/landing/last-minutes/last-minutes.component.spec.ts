import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { LastMinutesComponent } from './last-minutes.component';
import { InformationService } from '../../golf/information.service';
import { MarkdownModule } from 'ngx-markdown';

describe('LastMinutesComponent', () => {
  let component: LastMinutesComponent;
  let fixture: ComponentFixture<LastMinutesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MarkdownModule],
      declarations: [LastMinutesComponent],
      providers: [InformationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html'

import { LastMinutesComponent } from './last-minutes.component';
import { InformationService } from '../../golf/information.service';

describe('LastMinutesComponent', () => {
  let component: LastMinutesComponent;
  let fixture: ComponentFixture<LastMinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModuledule, MarkdownToHtmlModule],
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

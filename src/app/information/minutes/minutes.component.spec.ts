import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesComponent } from './minutes.component';
import { SlideOutMenuComponent } from '../../shared/slide-out-menu/slide-out-menu.component';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';
import { InformationService } from '../../golf/information.service';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

describe('MinutesComponent', () => {
  let component: MinutesComponent;
  let fixture: ComponentFixture<MinutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MarkdownModule],
      declarations: [
        MinutesComponent,
        SlideOutMenuComponent,
        SubHeaderComponent],
      providers: [InformationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

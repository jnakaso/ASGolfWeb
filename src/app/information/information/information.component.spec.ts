import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InformationComponent } from './information.component';
import { RulesComponent } from '../rules/rules.component';
import { OfficersComponent } from '../officers/officers.component';
import { MinutesComponent } from '../minutes/minutes.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { SlideOutMenuComponent } from '../../shared/slide-out-menu/slide-out-menu.component';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';
import { InformationService } from '../../golf/information.service';
import { PlayersService } from '../../golf/players.service';

describe('InformationComponent', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        NgbModule.forRoot(),
        Ng2PageScrollModule,
        HttpModule,
        BrowserAnimationsModule],
      declarations: [
        InformationComponent,
        RulesComponent,
        OfficersComponent,
        MinutesComponent,
        PageHeaderComponent,
        SlideOutMenuComponent,
        SubHeaderComponent],
      providers: [InformationService, PlayersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

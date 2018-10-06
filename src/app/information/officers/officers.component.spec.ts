import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { OfficersComponent } from './officers.component';
import { SlideOutMenuComponent } from '../../shared/slide-out-menu/slide-out-menu.component';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';
import { GolfService } from '../../golf/golf.service';
import { InformationService } from '../../golf/information.service';
import { PlayersService } from '../../golf/players.service';
import { HttpClientModule } from '@angular/common/http';

describe('OfficersComponent', () => {
  let component: OfficersComponent;
  let fixture: ComponentFixture<OfficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [
        OfficersComponent,
        SlideOutMenuComponent,
        SubHeaderComponent],
      providers: [GolfService, InformationService, PlayersService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

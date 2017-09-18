import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { OfficersComponent } from './officers.component';
import { SlideOutMenuComponent } from '../../shared/slide-out-menu/slide-out-menu.component';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';
import { InformationService } from '../../golf/information.service';
import { PlayersService } from '../../golf/players.service';

describe('OfficersComponent', () => {
  let component: OfficersComponent;
  let fixture: ComponentFixture<OfficersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule],
      declarations: [
        OfficersComponent,
        SlideOutMenuComponent,
        SubHeaderComponent],
      providers: [InformationService, PlayersService]
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

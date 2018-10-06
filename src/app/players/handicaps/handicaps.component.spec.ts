import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HandicapsComponent } from './handicaps.component';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';
import { ASSlopeAdjustedPipe } from '../../golf/asslope-adjusted.pipe';
import { PlayersService } from '../../golf/players.service';
import { CoursesService } from '../../golf/courses.service';

describe('HandicapsComponent', () => {
  let component: HandicapsComponent;
  let fixture: ComponentFixture<HandicapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        NgbModule.forRoot()
      ],
      declarations: [
        HandicapsComponent,
        SubHeaderComponent,
        ASSlopeAdjustedPipe],
      providers: [
        PlayersService,
        CoursesService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandicapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModuledule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PhotosComponent } from './photos.component';
import { MenuComponent } from '../menu/menu.component';
import { PhotosService } from '../../golf/photos.service';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, HttpClientModuledule, NoopAnimationsModule],
      declarations: [
        PhotosComponent,
        MenuComponent
      ],
      providers: [PhotosService, NgbCarouselConfig]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../golf/photos.service';

@Component({
  selector: 'as-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  folders: any[] = [];
  currentFolder: any = {};
  photos: any[] = [];
  sections: any[] = [];
 
  constructor(private photosService: PhotosService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.photosService.getPhotos()
      .subscribe(l => {
        this.folders = l;
        this.updateFolder(l[0]);
        this.sections = this.folders ? this.folders.map(f => {
          return { value: f.name, label: f.label };
        }) : [];
      });
  }

  updateFolder(selected) {
    this.currentFolder = selected;
    this.photos = this.currentFolder ? this.currentFolder.photos : [];
  }

  changeFolder(selected) {
      this.updateFolder(selected);
  }

}

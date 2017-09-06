import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { GolfModule } from '../golf/golf.module';

import { PhotosComponent } from './photos/photos.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'photos',
        component: PhotosComponent
      }
    ]),
    NgbModule,
    SharedModule,
    GolfModule
  ],
  declarations: [
    PhotosComponent,
    MenuComponent
  ]
})

export class PhotosModule {

}

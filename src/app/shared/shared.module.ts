import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SeasonSelectComponent } from './season-select/season-select.component';
import { SlideOutMenuComponent } from './slide-out-menu/slide-out-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    NgbModule.forRoot(),
    NgxPageScrollModule    
  ],
  declarations: [
    NavbarComponent,
    PageHeaderComponent,
    SubHeaderComponent,
    SeasonSelectComponent,
    SlideOutMenuComponent
  ],
  exports: [
    NavbarComponent,
    PageHeaderComponent,
    SubHeaderComponent,
    SeasonSelectComponent,
    SlideOutMenuComponent
  ]
})
export class SharedModule { }

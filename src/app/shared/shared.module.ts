import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SeasonSelectComponent } from './season-select/season-select.component';
import { SlideOutMenuComponent } from './slide-out-menu/slide-out-menu.component';
import { CacheControlInterceptor } from './cache-control.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    NgbModule
  ],
  declarations: [
    NavbarComponent,
    PageHeaderComponent,
    SubHeaderComponent,
    SeasonSelectComponent
  ],
  exports: [
    NavbarComponent,
    PageHeaderComponent,
    SubHeaderComponent,
    SeasonSelectComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheControlInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }

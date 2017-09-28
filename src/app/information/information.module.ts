import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html'

import { SharedModule } from '../shared/shared.module';
import { OfficersComponent } from './officers/officers.component';
import { MinutesComponent } from './minutes/minutes.component';
import { RulesComponent } from './rules/rules.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'information',
        component: InformationComponent
      },
      {
        path: 'information/minutes',
        component: InformationComponent
      }
    ]),
    NgbModule,
    Ng2PageScrollModule,
    SharedModule,
    MarkdownToHtmlModule.forRoot()
  ],
  declarations: [OfficersComponent, MinutesComponent, RulesComponent, InformationComponent]
})
export class InformationModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { WhereWePlayedComponent } from './where-we-played.component';

describe('WhereWePlayedComponent', () => {
  let component: WhereWePlayedComponent;
  let fixture: ComponentFixture<WhereWePlayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        GolfModule,
        RouterModule.forRoot([]),
        HttpModule
      ],
      declarations: [WhereWePlayedComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereWePlayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

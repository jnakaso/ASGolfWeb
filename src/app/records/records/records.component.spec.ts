import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../shared/shared.module';
import { GolfModule } from '../../golf/golf.module';
import { RecordsComponent } from './records.component';
import { MoneyPlayerComponent } from '../money-player/money-player.component';
import { KpSweeperComponent } from '../kp-sweeper/kp-sweeper.component';
import { HoleInOnesComponent } from '../hole-in-ones/hole-in-ones.component';
import { WhereWePlayedComponent } from '../where-we-played/where-we-played.component';

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        BrowserModule,
        RouterModule.forRoot([]),
        FormsModule,
        NoopAnimationsModule,
        SharedModule,
        GolfModule],
      declarations: [
        RecordsComponent,
        MoneyPlayerComponent,
        KpSweeperComponent,
        HoleInOnesComponent,
        WhereWePlayedComponent],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

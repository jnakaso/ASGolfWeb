import { Component, OnInit } from '@angular/core';
import { FunniesService } from './funnies.service';

@Component({
  selector: 'as-funnies',
  templateUrl: './funnies.component.html',
  styleUrls: ['./funnies.component.css']
})
export class FunniesComponent implements OnInit {

  funnies: string[];
  funny: string;
  funnyText: string;

  constructor(private funniesService: FunniesService) {
  }

  ngOnInit() {
    this.funniesService.getFunnies()
      .subscribe(l => {
        this.funnies = l.funnies;
        this.changeFunny();
      });
  }

  changeFunny() {
    let index = Math.floor((Math.random() * this.funnies.length));
    this.funny = this.funnies[index];
    if (this.isText()) {
      this.setFunnyText();
    }
  }

  isText() {
    return this.funny ? this.funny.indexOf('.txt') > 0 : false;
  }

  setFunnyText() {
    let data = this.funniesService.getFunnyText(this.funny)
      .subscribe(res => { this.funnyText = res });
  }

  isImage() {
    return this.funny ? this.funny.indexOf('.txt') == -1 : false;
  }
}

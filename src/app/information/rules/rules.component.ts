import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../golf/information.service';

@Component({
  selector: 'as-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: string;

  constructor(private informationService: InformationService) {
  }

  ngOnInit() {
    this.informationService.getRules().subscribe(t => this.rules = t);
  }

}

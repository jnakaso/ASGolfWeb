import { Component } from '@angular/core';

@Component({
  selector: 'as-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  private static SECTIONS = [
    { href: '#Rules', label: `Rules` },
    { href: '#Officers', label: `Officers` },
    { href: '#Minutes', label: `Minutes` }
  ];

  sections = InformationComponent.SECTIONS;

  constructor() {
  }

}

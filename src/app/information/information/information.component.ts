import { Component } from '@angular/core';

@Component({
  selector: 'as-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  private static SECTIONS = [
    { id: 'rules', label: `Rules` },
    { id: 'officers', label: `Officers` },
    { id: 'minutes', label: `Minutes` }
  ];
  activeIds = InformationComponent.SECTIONS.map(sec => sec.id);
  sections = InformationComponent.SECTIONS;

  constructor() {
  }

}

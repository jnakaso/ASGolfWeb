import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ng2PageScrollModule, PageScrollService, PageScrollInstance } from 'ng2-page-scroll/ng2-page-scroll';

@Component({
  selector: 'as-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements AfterContentInit {
  private static SECTIONS = [
    { href: '#Rules', label: `Rules` },
    { href: '#Officers', label: `Officers` },
    { href: '#Minutes', label: `Minutes` }
  ];

  sections = InformationComponent.SECTIONS;

  constructor(
    private route: ActivatedRoute,
    private pageScrollService: PageScrollService) {
  }

  //  ngAfterViewInit() {
  ngAfterContentInit() {
    this.route.params.subscribe(params => {
      let section = params['section'];
      if (section) {
        let ps = PageScrollInstance.simpleInstance(document, '#Minutes');
        this.pageScrollService.start(ps);
      }
    });
  }

}

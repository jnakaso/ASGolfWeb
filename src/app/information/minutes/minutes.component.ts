import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../golf/information.service';
@Component({
    selector: 'as-minutes',
    templateUrl: './minutes.component.html',
    styleUrls: ['./minutes.component.css']
})
export class MinutesComponent implements OnInit {

    paths: string[] = [];
    minutes: any = {};

    constructor(private informationService: InformationService) {
    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.informationService.getMinutes()
            .subscribe(pths => {
                this.paths = pths;
                this.paths.forEach(p => {
                    this.informationService.getMdText(p).subscribe(t => {
                        this.minutes[p] = t;
                    });
                });
            });
    }

    getText(path: string) {
        return this.minutes[path];
    }

}

import { Component, OnInit } from '@angular/core';
import { ASPlayer } from '../../golf/asplayer';
import { InformationService } from '../../golf/information.service';
import { PlayersService } from '../../golf/players.service';

@Component({
  selector: 'as-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.css']
})
export class OfficersComponent implements OnInit {
  public static POSTITIONS = {
    "TournamentChair": "T",
    "President": "P",
    "VicePresident": "V",
    "AwardsChair": "A",
    "Webmaster": "W",
    "Treasurer": "T",
    "Secretary": "S",
    "HandicapChair": "H"
  };

  officers: any[];
  activeOnly: boolean = true;
  players: ASPlayer[];

  lastYear: number = 2016;
  firstYear: number = 2007;
  columns = 9;
  start: number;
  end: number;
  seasonRange: number[] = [];

  constructor(
    private informationService: InformationService,
    private playersService: PlayersService) {
  }

  ngOnInit() {
    this.loadData();
  }

  getPosition(player: ASPlayer, season: number) {
    let positions = OfficersComponent.POSTITIONS;
    if (this.officers) {
      let yOfficers = this.officers.find(o => o.$.year == ('' + season));
      if (yOfficers) {
        let posArray = [];
        let pName = this.getPlayerName(player);
        for (let p in positions) {
          let fArray = yOfficers[p];
          if (fArray && (fArray[0].indexOf(pName) > -1)) {
            posArray.push(positions[p]);
          }
        }
        return posArray.join('/');
      }
    }
    return "";
  }

  getPlayerName(player: ASPlayer) {
    // I am Jeff in the golf data, but Jeffrey in the officer sheet
    return (player.firstName == 'Jeffrey' ? 'Jeff' : player.firstName) + " " + player.lastName;
  }

  loadData() {
    this.playersService.getPlayers()
      .subscribe(e => this.players = e);
    this.informationService.getOfficers()
      .subscribe(result => this.officers = result);
    this.start = this.lastYear;
    this.loadPaging();
  }

  filteredPlayers() {
    if (!this.players) {
      return [];
    }
    if (this.activeOnly) {
      return this.players.filter(d => d.active);
    } else {
      return this.players;
    }
  }

  // Paging

  loadPaging() {
    this.end = Math.max(this.start - this.columns, this.firstYear);

    let left = this.start;
    let right = this.end;
    this.seasonRange = [];
    for (let i = left; i >= right; i--) {
      this.seasonRange.push(i);
    }
  }

  showLeft() {
    return this.start < this.lastYear;
  }

  showRight() {
    return this.end > this.firstYear;
  }

  goLeft() {
    this.start = Math.min(this.lastYear, this.start + 1);
    this.loadPaging();
  }

  goRight() {
    this.start = this.start - 1;
    this.loadPaging();
  }

}

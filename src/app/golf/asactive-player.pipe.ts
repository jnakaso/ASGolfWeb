import { Pipe, PipeTransform } from '@angular/core';
import { ASPlayer } from './asplayer';

@Pipe({
  name: 'ASActivePlayer'
})
export class ASActivePlayerPipe implements PipeTransform {
  transform(players: ASPlayer[], isActive: boolean): ASPlayer[] {
    if (isActive == null) {
      return players;
    }
    return players.filter(player => player.active == isActive);
  }
}

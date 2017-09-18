import { ASActivePlayerPipe } from './asactive-player.pipe';
import { ASPlayer } from './asplayer';

describe('ASActivePlayerPipe', () => {
  it('filter a list of players to include only active ones', () => {
    let player1 = new ASPlayer();
    player1.id = 1;
    player1.active = false;
    let player2 = new ASPlayer();
    player2.id = 2;
    player2.active = true;

    const players: ASPlayer[] = [player1, player2];
    const pipe = new ASActivePlayerPipe();

    let active = pipe.transform(players, true);
    expect(active.length).toEqual(1);
    expect(active[0].id).toEqual(2);

    let inactive = pipe.transform(players, false);
    expect(inactive.length).toEqual(1);
    expect(inactive[0].id).toEqual(1);

    let all = pipe.transform(players, null);
    expect(all.length).toEqual(2);
    expect(all[0].id).toEqual(1);
  });

});

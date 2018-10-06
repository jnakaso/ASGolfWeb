
export class ASWinner {
    id: number;
    roundID: number;
    playerID: number;
    player: string;
    flight: string;
    score: number;
    place: number;
    points: number;
    money: number;
 
    constructor (t : any) {
        this.id = t.id;
        this.roundID = t.roundID;
        this.playerID = t.playerID;
        this.player = t.player;
        this.flight = t.flight;
        this.score = t.score;
        this.place = t.place;
        this.points = t.points;
        this.money = t.money;
    }
}
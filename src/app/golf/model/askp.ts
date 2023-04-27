
export class ASKp {
    id: number;
    playerID: number;
    player: string;
    hole: number;
    flight: string;
    distance: string;

    constructor (k : any) {
        this.id = k.id;
        this.playerID = k.playerID;
        this.player = k.player;
        this.hole = k.hole;
        this.flight = k.flight;
        this.distance = k.distance;
    }
}
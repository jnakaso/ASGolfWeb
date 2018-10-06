
export class ASRound {
    id: number;
    player: string;
    playerID: number;
    flight: string;
    handicap: number;
    holes: number[];
    front: number;
    back: number;
    total: number;
    frontNet: number;
    backNet: number;
    totalNet: number;
    adjusted: number;

    constructor(r: any) {
        this.id = r.id;
        this.playerID = r.playerID;
        this.player = r.player;
        this.holes = r.holes;
        this.flight = r.flight;
        this.handicap = r.handicap;
        
        this.holes = r.holes;
        this.front = r.front;
        this.back = r.back;
        this.total = r.total;
        this.frontNet = r.frontNet;
        this.backNet = r.backNet;
        this.totalNet = r.totalNet;
        this.adjusted = r.adjusted;
   
    }
}
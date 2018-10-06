import { ASRound } from "./asround";
import { ASWinner } from "./aswinner";
import { ASKp } from "./askp";
import { ASHoneypot } from "./ashoneypot";
import { ASTournament } from "../astournament";

export class ASTournamentSummary {
    id: number;
    info: ASTournament = new ASTournament({});
    rounds: ASRound[] = [];
    winners: ASWinner[] = [];
    kps: ASKp[] = [];
    honeypot: ASHoneypot = new ASHoneypot({});

    constructor(t: any) {
        this.id = t.id;
        this.info = t.info;
        this.rounds = t.rounds ? t.rounds : [];
        this.winners = t.winners ? t.winners : [];
        this.kps = t.kps ? t.kps : [];
        this.honeypot = t.honeypot;
    }
}
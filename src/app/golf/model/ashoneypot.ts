
export class ASHoneypot {
    frontScore: number;
    frontEarnings: number;
    frontWinners: string[];

    backScore: number;
    backEarnings: number;
    backWinners: string[];

    totalScore: number;
    totalEarnings: number;
    totalWinners: string[];

    constructor(h: any) {
        this.frontScore = h.frontScore;
        this.frontEarnings = h.frontEarnings;
        this.frontWinners = h.frontWinners;
        this.backScore = h.backScore;
        this.backEarnings = h.backEarnings;
        this.backWinners = h.backWinners;
        this.totalScore = h.totalScore;
        this.totalEarnings = h.totalEarnings;
        this.totalWinners = h.totalWinners;
    }
}
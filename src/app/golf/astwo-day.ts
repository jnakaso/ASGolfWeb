
export class ASTwoDayScore {
    playerId: number;
    playerName: string;
    flight: string;
    total: number;
    dayTwo: number;
    dayOne: number;
    dayOneHandicap: number;
    dayTwoHandicap: number;
}

export class ASTwoDay {
    dayTwoCourseName: string
    dayOneCourseName: string;
    scores: ASTwoDayScore[] = [];
}

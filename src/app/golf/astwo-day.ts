
export class ASTwoDayScore {
    flight: string;
    total: number;
    daytwo: number;
    handicap: number;
    dayone: number;
    totalNet: number;
    player: string;
    handicapOne: number;
    handicapTwo: number;
}

export class ASTwoDay {
    daytwoCourseName: string
    dayoneCourseName: string;
    scores: ASTwoDayScore[] = [];
}

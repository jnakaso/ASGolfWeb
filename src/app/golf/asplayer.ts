import { ASRound } from "./model/asround";

export class ASPlayer {
    id: number;
    firstName: string;
    lastName: string;
    handicap: number;
    active: boolean;
    rounds: ASRound[];
    seasonSummaries: any[];
}

export class ASTournament {
    id: string;
    date: Date = new Date();
    courseName: string;
    seasonID: number;
    rating: number;
    slope: number;
    type: string;

    constructor (t : any) {
        this.id = t.id;
        this.date = t.date;
        this.courseName = t.courseName;
        this.seasonID = t.seasonID;
        this.rating = t.rating;
        this.slope = t.slope;
        this.type = t.type;
    }
}
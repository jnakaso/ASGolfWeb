import { ASCourseTee } from "./ascourse";

export class ASTournament {
    id: string;
    date: Date = new Date();
    courseId: number;
    courseName: string;
    seasonID: number;
    rating: number;
    slope: number;
    type: string;
    tees: ASCourseTee[];

    constructor (t : any) {
        this.id = t.id;
        this.date = t.date;
        this.courseId = t.courseId;
        this.courseName = t.courseName;
        this.seasonID = t.seasonID;
        this.rating = t.rating;
        this.slope = t.slope;
        this.type = t.type;
        this.tees = t.tees;
    }
}
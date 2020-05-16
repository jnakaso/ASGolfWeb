export class ASCourseTee {
    id: number;
    name: string;
    rating: number;
    slope: number;
    pars: number[];
    handicaps: number[];
}

export class ASCourse {
    id: number;
    name: string;
    tees: ASCourseTee[];

    constructor(c) {
        this.id = c.id;
        this.name = c.name;
        this.tees = c.tees;
    }
}

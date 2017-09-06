export class ASCourseTee {
    id: number;
    name: string;
    rating: number;
    slope: number;
}

export class ASCourse {
    id: number;
    name: string;
    tees: ASCourseTee[];
}

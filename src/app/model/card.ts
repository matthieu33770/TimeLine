export class Card {
    id: number;
    title: string;
    image: string;
    detail: string;
    date: number;

    constructor(id: number, title: string, image: string, detail: string, date: number) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.detail = detail;
        this.date = date;
    }
}

export class Cards {
    constructor(public id: number,
                public title: string,
                public image: string,
                public detail: string,
                public date: number) { }
}

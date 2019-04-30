import { Card } from './card';


export class TimeLine {

    id: number;
    name: string;
    categorie: string;
    dateCreation: Date;
    dateMajour: Date;
    cardList: Card [];

    constructor(id: number, name: string, categorie: string, dateCreation: Date, dateMajour: Date, cardList: Card[]) {
        this.id = id;
        this.name = name;
        this.categorie = categorie;
        this.dateCreation = dateCreation;
        this.dateMajour = dateMajour;
        this.cardList = cardList;
    }
}

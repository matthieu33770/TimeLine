import { Injectable } from '@angular/core';
import { TimeLine } from './model/Timeline.model';
import { Card } from './model/card';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatamockService {

  httpClient: HttpClient;

  availableCardHDN: Card [] = [
    new Card(1, 'Windows XP', 'http://pl.blog.dietrichs.com/wp-content/uploads/sites/6/2017/09/windowsxp.jpg', 'Création de Windows XP', 2001),
    new Card(2, 'Windows Server', 'https://ackware-formation.fr/wp-content/uploads/2016/02/Windows-server.jpg', 'Création de Windows Server', 1993),
    new Card(3, 'Windows 10', 'https://www.apollo-formation.com/wp-content/uploads/windows10-300x225.jpg', 'Création de Windows 10', 2015)
  ];

  availableCardHDD: Card [] = [
    new Card(1, 'Windows 3.11', 'https://www.computerhope.com/jargon/w/windows31.jpg', 'Création de Windows 3.11', 1993),
    new Card(2, 'Windows Seven', 'https://www.ginjfo.com/wp-content/uploads/2017/04/Windows7_Pro.jpg', 'Création de Windows Seven', 2009)
  ];

  availableTimeline: TimeLine[] = [
    new TimeLine(1, 'Histoire du numérique', 'Fondamentaux', new Date('02/09/2018'), new Date(), this.availableCardHDN),
    new TimeLine(2, 'Histoire des données', 'Data', new Date('02/09/2018'), new Date(), this.availableCardHDD)
  ];

  constructor() { }

  public getTimelines(): Observable<TimeLine[]> {
    return this.httpClient.get<TimeLine[]>('http://localhost:8080/api/timeline');
  }

  public createTimeline (newTimeline: TimeLine): Observable<TimeLine> {
    return this.httpClient.post<TimeLine>('http://localhost:8080/api/timeline', newTimeline);
  }
}

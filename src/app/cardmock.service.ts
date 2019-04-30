import { Injectable } from '@angular/core';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root'
})
export class CardmockService {

  availableCardHDN: Card [] = [
    new Card(1, 'Windows XP', 'http://pl.blog.dietrichs.com/wp-content/uploads/sites/6/2017/09/windowsxp.jpg', 'Création de Windows XP', 2001),
    new Card(2, 'Windows 3.11', 'https://www.computerhope.com/jargon/w/windows31.jpg', 'Création de Windows 3.11', 1993),
    new Card(3, 'Windows Seven', 'https://www.ginjfo.com/wp-content/uploads/2017/04/Windows7_Pro.jpg', 'Création de Windows Seven', 2009),
    new Card(4, 'Windows Server', 'https://ackware-formation.fr/wp-content/uploads/2016/02/Windows-server.jpg', 'Création de Windows Server', 1993),
    new Card(5, 'Windows 10', 'https://www.apollo-formation.com/wp-content/uploads/windows10-300x225.jpg', 'Création de Windows 10', 2015)
  ];

  constructor() { }
}

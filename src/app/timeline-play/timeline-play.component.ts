import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { DatePipe } from '@angular/common';
import { CardmockService } from '../cardmock.service';

@Component({
  selector: 'app-timeline-play',
  templateUrl: './timeline-play.component.html',
  styleUrls: ['./timeline-play.component.css'],
  providers: [DatePipe]
})

export class TimelinePlayComponent implements OnInit {

  cardToFind: Card;
  cardToFindList: Card [] = [];
  cardFoundList: Card [] = [];
  guessDate: number;
  trouve: Boolean = false;
  longueurListe: number;
  random: number;

  constructor(private cardMockService: CardmockService) { }

  ngOnInit() {
    this.cardToFindList = this.cardMockService.availableCardHDN;
    console.log(this.cardToFindList);
    this.longueurListe = this.cardToFindList.length;
    this.random = Math.floor(Math.random() * (this.longueurListe - 0) + 0);
    console.log(this.random);
    this.cardToFind = this.cardToFindList[this.random];
    console.log(this.cardFoundList);
    console.log(this.cardToFindList.length);
  }

  debut() {
  }

  onGuess() {
    console.log('bouton Submit cliqué : ' + this.guessDate + ' - ' + this.cardToFind.date);
    if ( this.guessDate === this.cardToFind.date) {
      this.trouve = true;
      this.cardFoundList.push(this.cardToFind);
      this.cardToFindList.splice(this.random, 1);
    }
    this.guessDate = null;
    if ( this.cardToFindList.length > 0) {
      this.longueurListe = this.cardToFindList.length;
      this.random = Math.floor(Math.random() * (this.longueurListe - 0) + 0);
      this.cardToFind = this.cardToFindList[this.random];
      this.cardFoundList.sort((a, b) => a.date - b.date);
    } else {
      this.cardToFind = null;
    }
  }
}

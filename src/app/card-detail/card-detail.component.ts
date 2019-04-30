import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../model/card';
import { TimelineDetailComponent } from '../timeline-detail/timeline-detail.component';
import { DatamockService } from '../datamock.service';
import { TimeLine } from '../model/Timeline.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  id: number;
  editedTimeLine: TimeLine;
  idCard: number;
  editedCard: Card;
  cardIteration: Card;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private datamockService: DatamockService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.idCard = +this.route.snapshot.params['idCard'];
    if (this.id) {
      for (const timeIteration of this.datamockService.availableTimeline) {
        if (timeIteration.id === this.id) {
          this.editedTimeLine = timeIteration;
          console.log(this.editedTimeLine.cardList);
          console.log(this.idCard);
          if (this.idCard) {
            for (const cardIteration of this.editedTimeLine.cardList) {
              if (cardIteration.id === this.idCard) {
                this.editedCard = cardIteration;
                console.log(cardIteration.id);
              }
            }
          } else {
            this.editedCard = new Card(10, '', '', '', 2011);
          }
        }
      }
    }
  }

  onSubmit() {
    if (!this.id) {
      this.editedTimeLine.cardList.push(this.editedCard);
    }
    this.router.navigate(['timeline/{{editedTimeLine.id}}']);
  }
}

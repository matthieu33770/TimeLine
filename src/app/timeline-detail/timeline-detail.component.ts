import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatamockService } from '../datamock.service';
import { TimeLine } from '../model/Timeline.model';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-timeline-detail',
  templateUrl: './timeline-detail.component.html',
  styleUrls: ['./timeline-detail.component.css']
})
export class TimelineDetailComponent implements OnInit {

  cardSource: Card[] = [];
  inputDate: Date;
  title: string;
  id: number;
  editedTimeLine: TimeLine;
  timeIteration: TimeLine;
  formatDate: String = 'dd/MM/yy';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private datamockService: DatamockService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.inputDate = new Date();

    // this.editedTimeLine = this.datamockService.availableTimeline.find(timelineIter => timelineIter.id == this.id);
    if (this.id) {
      for (const timeIteration of this.datamockService.availableTimeline) {
        if (timeIteration.id === this.id) {
          this.editedTimeLine = timeIteration;
          console.log(this.editedTimeLine);
          this.cardSource = timeIteration.cardList;
          console.log(this.cardSource);
        }
      }
    } else {
        this.editedTimeLine = new TimeLine(this.datamockService.availableTimeline.length + 1, '', '', new Date(), new Date(), this.cardSource);
    }
    // if (this.id === 1) {
    //   console.log(this.id);
    //   this.cardSource = this.datamockService.availableCardHDN;
    // }
  }

  onSubmit() {
    if (!this.id) {
      this.datamockService.availableTimeline.push(this.editedTimeLine);
    }
    this.router.navigate(['timelinecorrection']);
  }
}

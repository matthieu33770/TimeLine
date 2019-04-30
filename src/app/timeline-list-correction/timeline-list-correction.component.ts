import { Component, OnInit } from '@angular/core';
import { TimeLine } from '../model/Timeline.model';
import { DatamockService } from '../datamock.service';

@Component({
  selector: 'app-timeline-list-correction',
  templateUrl: './timeline-list-correction.component.html',
  styleUrls: ['./timeline-list-correction.component.css']
})
export class TimelineListCorrectionComponent implements OnInit {

  timelineList: TimeLine[] = [];
  formatDate: String = 'dd/MM/yy';

  constructor(private datamockservice: DatamockService) { }

  ngOnInit() {
    this.datamockservice.getTimelines().subscribe(timelineListAPI => this.timelineList = timelineListAPI);
    // this.datamockservice.getTimelines().subscribe(function(timelineListAPI) { this.timelineList = timelineListAPI});
    this.timelineList = this.datamockservice.availableTimeline;
  }

}

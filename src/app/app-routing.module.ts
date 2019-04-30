import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TimelinePlayComponent } from './timeline-play/timeline-play.component';
import { TimelineDetailComponent } from './timeline-detail/timeline-detail.component';
import { TimelineListCorrectionComponent } from './timeline-list-correction/timeline-list-correction.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  { path: 'timeline', component: TimelineListComponent },
  { path: 'timelinecorrection', component: TimelineListCorrectionComponent},
  { path: 'timeline-play', component: TimelinePlayComponent },
  { path: 'timeline-edit', component: TimelineDetailComponent},
  { path: 'timeline/:id', component: TimelineDetailComponent},
  { path: 'timeline/new', component: TimelineDetailComponent},
  { path: 'timeline/:id/card/:idCard', component: CardDetailComponent},
  { path: 'timeline/:id/card/new', component: CardDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

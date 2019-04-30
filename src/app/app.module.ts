import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TimelineListCorrectionComponent } from './timeline-list-correction/timeline-list-correction.component';
import { TimelinePlayComponent } from './timeline-play/timeline-play.component';
import { FormsModule } from '@angular/forms';
import { TimelineDetailComponent } from './timeline-detail/timeline-detail.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TimelineListComponent,
    TimelineListCorrectionComponent,
    TimelinePlayComponent,
    TimelineDetailComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [TimelinePlayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

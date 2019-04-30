import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineListCorrectionComponent } from './timeline-list-correction.component';

describe('TimelineListCorrectionComponent', () => {
  let component: TimelineListCorrectionComponent;
  let fixture: ComponentFixture<TimelineListCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineListCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineListCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

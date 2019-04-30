import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePlayComponent } from './timeline-play.component';

describe('TimelinePlayComponent', () => {
  let component: TimelinePlayComponent;
  let fixture: ComponentFixture<TimelinePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

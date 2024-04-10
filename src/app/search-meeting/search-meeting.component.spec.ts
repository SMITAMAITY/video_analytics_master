import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMeetingComponent } from './search-meeting.component';

describe('SearchMeetingComponent', () => {
  let component: SearchMeetingComponent;
  let fixture: ComponentFixture<SearchMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchMeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

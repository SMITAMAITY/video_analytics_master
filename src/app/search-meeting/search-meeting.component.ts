import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-meeting',
  templateUrl: './search-meeting.component.html',
  styleUrl: './search-meeting.component.css'
})
export class SearchMeetingComponent {
  value: string = '';

  items: any[] = [];

  selectedItem: any;

  suggestions: any[] = [];

  constructor(private router: Router) {

  }

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = ['Abdul Shaik','Jacob Jones'];
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

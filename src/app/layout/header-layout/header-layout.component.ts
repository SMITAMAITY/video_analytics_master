import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-layout',
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent implements OnInit{
  isInteractionPath:boolean = false

  ngOnInit(): void {
    // this.isInteractionPath = window.location.pathname.includes('interaction-details') ? false : true;
  }
}

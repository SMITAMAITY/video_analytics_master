import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit {
  menuItems:any=[]
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'calendar',
        icon: 'pi pi-calendar'
      },
      {
        label: 'video',
        icon: 'pi pi-video'
      },
      {
        label: 'user',
        icon: 'pi pi-user'
      },
      {
        label: 'cog',
        icon: 'pi pi-cog'
      }
    ]
  }

}

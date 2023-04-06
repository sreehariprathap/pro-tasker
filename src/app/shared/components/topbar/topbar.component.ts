import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'pro-tasker-topbar',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state('hidden', style({
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out'))
    ])
  ]
})
export class TopbarComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  showSidebar = false;
  user: any;

  constructor() {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}

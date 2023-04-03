import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import {
  faHome,
  faUser,
  faListCheck,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'pro-tasker-navbar',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faListCheck = faListCheck;
  faCalendar = faCalendar;

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {}
}

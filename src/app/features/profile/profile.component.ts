import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'pro-tasker-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User | any;
  taskCategories: any = [
    {
      name: 'All tasks',
      icon: '📝',
    },
    {
      name: 'Completed tasks',
      icon: '✅',
    },
    {
      name: 'Pending tasks',
      icon: '⏱️',
    },
  ];
  constructor(private readonly auth: AuthenticationService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
  }

  logout() {
    this.auth.SignOut();
  }
}

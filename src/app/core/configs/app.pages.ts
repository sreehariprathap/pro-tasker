import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Pages {
  // Routes for authenticated users only
  accessRoutes: { [k: string]: string[] };
  // Routes for non-authenticated users only
  authRoutes: string[];
  // Routes for both users
  commonRoutes: string[];

  constructor() {
    this.accessRoutes = {
      // Access for all user roles
      all: ['dashboard', 'tasks', 'calender', 'profile'],
    };
    this.authRoutes = ['authentication'];
    this.commonRoutes = [];
  }
}

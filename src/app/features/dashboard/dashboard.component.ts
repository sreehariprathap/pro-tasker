import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-tasker-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentDate = new Date();
  year = this.currentDate.getFullYear();
  month = ('0' + (this.currentDate.getMonth() + 1)).slice(-2);
  day = ('0' + this.currentDate.getDate()).slice(-2);
  formattedDate = `${this.year}-${this.month}-${this.day}`;

  date = this.formattedDate;

  constructor() {}

  ngOnInit(): void {}

  updateDate($event:any) {
    this.date = $event;
  }
}

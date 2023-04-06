import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  isInitScreen = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.isInitScreen = params['initialLogin'];
    });
  }

  updateDate($event: any) {
    this.date = $event;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pro-tasker-days',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
})
export class DaysComponent implements OnInit {
  selectedDay = 'Monday';
  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  constructor() {}

  ngOnInit(): void {
    this.getDayName();
  }
  setSelectedDay(value: string): void {
    this.selectedDay = value;
  }
  getDayName() {
    const date = new Date();
    const dayIndex = date.getDay();
    this.selectedDay = this.days[dayIndex];
  }
}

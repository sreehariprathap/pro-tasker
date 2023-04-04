import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'pro-tasker-days',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss'],
})
export class DaysComponent implements OnInit {
  selectedDay: any;
  days: any = null;
  @Output() dateSelectEvent = new EventEmitter<any>();
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getWeek();
    this.selectedDay = this.days[0];
  }
  setSelectedDay(value: string): void {
    this.selectedDay = value;
    this.dateSelectEvent.emit(this.formatDate(this.selectedDay.date));
  }
  getDayName() {
    const date = new Date();
    const dayIndex = date.getDay();
    this.selectedDay = { day: this.days[dayIndex], date: date };
    this.days.push(this.selectedDay);
  }
  getWeek() {
    const today = new Date();
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const days = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + i
      );
      const dayName = weekdays[date.getDay()];
      days.push({ day: dayName, date: date });
    }

    this.days = days;
  }

  formatDate(date: Date) {
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return formattedDate;
  }
}

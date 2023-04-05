import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(private datePipe: DatePipe) {}
  truncateText(text: string, length: number): string {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    } else {
      return text;
    }
  }

  formatDate(date: Date) {
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return formattedDate;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}
  truncateText(text: string, length: number): string {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    } else {
      return text;
    }
  }
}

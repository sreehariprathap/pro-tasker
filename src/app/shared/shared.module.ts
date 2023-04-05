import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
  ],
  exports: [
    FontAwesomeModule,
    LottieModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
  ],
  providers: [DatePipe],
})
export class SharedModule {}

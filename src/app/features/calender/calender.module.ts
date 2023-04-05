import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { CalanderComponent } from 'src/app/shared/components/calander/calander.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    CalanderComponent,
    SharedModule,
  ],
})
export class CalenderModule {}

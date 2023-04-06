import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { TaskCardComponent } from 'src/app/shared/components/task-card/task-card.component';


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MultiSelectModule ,
    TaskCardComponent
  ]
})
export class TasksModule { }

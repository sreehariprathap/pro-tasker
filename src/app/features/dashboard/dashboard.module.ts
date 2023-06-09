import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DaysComponent } from 'src/app/shared/components/days/days.component';
import { StartingTodayComponent } from './starting-today/starting-today.component';
import { DueSoonComponent } from './due-soon/due-soon.component';
import { TasksComponent } from 'src/app/shared/components/tasks/tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateTaskComponent } from 'src/app/shared/components/create-task/create-task.component';
import { WelcomeModalComponent } from 'src/app/shared/components/welcome-modal/welcome-modal.component';

@NgModule({
  declarations: [DashboardComponent, StartingTodayComponent, DueSoonComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DaysComponent,
    TasksComponent,
    SharedModule,
    CreateTaskComponent,
    WelcomeModalComponent,
  ],
  providers: [DatePipe],
})
export class DashboardModule {}

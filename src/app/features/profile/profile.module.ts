import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ButtonCardComponent } from 'src/app/shared/components/button-card/button-card.component';
import { RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TaskCardComponent } from 'src/app/shared/components/task-card/task-card.component';

@NgModule({
  declarations: [ProfileComponent, AllTasksComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonCardComponent,
    RouterModule,
    TaskCardComponent,
  ],
})
export class ProfileModule {}

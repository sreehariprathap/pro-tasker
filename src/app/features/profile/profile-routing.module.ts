import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'tasks', component: AllTasksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}

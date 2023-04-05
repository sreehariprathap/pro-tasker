import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { ValidationService } from 'src/app/core/services/validation.service';
import { TasksService } from 'src/app/core/services/tasks.service';
import { TasksComponent } from '../tasks/tasks.component';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'pro-tasker-calander',
  standalone: true,
  imports: [CommonModule, SharedModule, TasksComponent, CreateTaskComponent],
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.scss'],
})
export class CalanderComponent implements OnInit {
  tasks: any;
  selectedDate = this.validation.formatDate(new Date());
  constructor(
    private validation: ValidationService,
    private readonly tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  public onCellClick(args: any): void {
    console.log(this.validation.formatDate(args.value));
    this.selectedDate = this.validation.formatDate(args.value);
    this.getAllTasks();
  }
  getAllTasks() {
    this.tasksService.getAllTasks().subscribe((tasks: any) => {
      this.tasks = tasks.filter((t: any) => t.startDate === this.selectedDate);
    });
  }
}

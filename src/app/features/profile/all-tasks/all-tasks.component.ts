import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'pro-tasker-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent implements OnInit {
  title: any;
  icon: any;
  tasks: any;
  constructor(
    private route: ActivatedRoute,
    private readonly taskService: TasksService,
    private readonly loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.title = params['name'];
      this.icon = params['icon'];
    });
    this.getTasks();
  }
  getTasks() {
    this.loader.setLoading(true);
    this.taskService
      .getAllTasks()
      .valueChanges()
      .subscribe((data: any) => {
        if (this.title === 'Completed tasks') {
          this.tasks = data.filter((t: any) => t.isCompleted);
        } else if (this.title === 'Pending tasks') {
          this.tasks = data.filter((t: any) => !t.isCompleted);
        } else {
          this.tasks = data;
        }
        this.loader.setLoading(false);
      });
  }
}

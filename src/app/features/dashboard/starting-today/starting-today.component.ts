import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks.service';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'pro-tasker-starting-today',
  templateUrl: './starting-today.component.html',
  styleUrls: ['./starting-today.component.scss'],
})
export class StartingTodayComponent implements OnInit, OnChanges {
  faCirclePlus = faCirclePlus;

  tasks: any;

  @Input() date: any;

  constructor(
    private tasksService: TasksService,
    private readonly loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getAllTasks();
  }

  getAllTasks() {
    this.loader.setLoading(true);
    this.tasksService
      .getAllTasks()
      .valueChanges()
      .subscribe((tasks: any) => {
        this.tasks = tasks.filter((t: any) => t.startDate === this.date);
        this.loader.setLoading(false);
      });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { LoaderService } from 'src/app/core/services/loader.service';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'pro-tasker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm!: string | null;
  tasks: any;
  results: any = [];
  constructor(
    private route: ActivatedRoute,
    private readonly tasksService: TasksService,
    private readonly loader: LoaderService
  ) {
    this.getAllTasks();
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['searchTerm'];
      this.results = this.searchObjects(this.tasks, this.searchTerm);
    });
  }
  options: AnimationOptions = {
    path: '/assets/lottie/search_empty.json',
  };

  ngOnInit(): void {
    // this.getAllTasks();
  }

  getAllTasks() {
    this.tasksService
      .getAllTasks()
      .valueChanges()
      .subscribe((tasks: any) => {
        this.tasks = tasks;
      });
  }

  searchObjects(objects: any[], searchTerm: any) {
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    const filteredObjects = objects.filter((obj) =>
      Object.values(obj).some(
        (value) =>
          typeof value === 'string' &&
          value.toLowerCase().includes(lowercaseSearchTerm)
      )
    );
    console.log(filteredObjects);
    return filteredObjects;
  }
  ngOnDestroy(): void {
    this.searchTerm = null;
    this.tasks = null;
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskSmileyCategory } from 'src/app/core/constants/app.constants';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'pro-tasker-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  data!: any;
  public fields: Object = { text: 'name', value: 'id' };

  smileyCategories = TaskSmileyCategory;
  selectedItems: any = [];
  tasks: any;

  constructor(private readonly taskService: TasksService) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getTasks();
  }

  getAllCategories() {
    this.taskService.getAllTaskCategories().valueChanges().subscribe((data: any) => {
      data.forEach((element: any) => {
        element.name = `${element.name} ${this.smileyCategories[element.id]}`;
      });
      this.data = data;
    });
  }

  getTasks(categories?: any) {
    this.taskService.getAllTasks().valueChanges().subscribe((data: any) => {
      if (categories && categories.length) {
        // const newArr = data.filter((t:any )=> t.categoryId )
        this.tasks = data.filter((task: any) => {
          return categories.includes(task.categoryId);
        });
      } else {
        this.tasks = data;
      }
    });
  }

  addCategories(args: any) {
    this.selectedItems.push(args.itemData.id);
    this.getTasks(this.selectedItems);
  }

  remove(args: any) {
    const arr = this.selectedItems.filter(
      (number: number) => number != args.itemData.id
    );
    this.selectedItems = arr;
    this.getTasks(this.selectedItems);
  }
}

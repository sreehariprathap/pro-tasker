import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksRef!: AngularFireList<any>;
  taskRef!: AngularFireObject<any>;

  categoriesRef!: AngularFireList<any>;
  user: any;

  constructor(
    private db: AngularFireDatabase,
    private readonly loadingService: LoaderService
  ) {}
  getAllTasks() {
    this.tasksRef = this.db.list('tasks');
    return this.tasksRef;
  }

  getTaskById(id: any) {
    this.taskRef = this.db.object('tasks/' + id);
    return this.taskRef;
  }

  getAllTaskCategories() {
    this.categoriesRef = this.db.list('categories');
    return this.categoriesRef;
  }

  createtask(params: any) {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
    this.tasksRef.push({
      name: params.name,
      categoryId: params.category,
      startDate: params.startDate,
      dueDate: params.dueDate,
      description: params.description,
      userId: this.user.uid,
      isCompleted: false,
    });
  }

  UpdateTask() {
    this.taskRef.update({
      isCompleted: true,
    });
  }
}

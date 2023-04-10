import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { LoaderService } from './loader.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksRef!: AngularFireList<any>;
  taskRef!: AngularFireObject<any>;

  categoriesRef!: AngularFireList<any>;
  user: any;
  desiredObjectRef!: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private readonly loadingService: LoaderService
  ) {}
  
  getAllTasks() {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
    this.tasksRef = this.db.list('tasks', ref => ref.orderByChild('userId').equalTo(this.user.uid));
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
    const id = this.db.createPushId(); // generate a unique ID
    this.tasksRef.push({
      name: params.name,
      categoryId: +params.category,
      startDate: params.startDate,
      dueDate: params.dueDate,
      description: params.description,
      userId: this.user.uid,
      isCompleted: false,
      id: id,
    });
  }

  markTaskasDone(id: any) {
    this.desiredObjectRef = this.db
    .list<any>('tasks', ref => ref.orderByChild('id').equalTo(id))
    .snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(change => ({
          key: change.payload.key,
          ...change.payload.val()
        }))[0]
      )
    );
  this.desiredObjectRef.subscribe(objectToUpdate => {
    objectToUpdate.isCompleted = true;
    this.db.list('tasks').update(objectToUpdate.key, objectToUpdate);
  });
  }
}

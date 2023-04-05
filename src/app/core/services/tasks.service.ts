import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private readonly http: HttpClient) {}
  getAllTasks() {
    return this.http.get('tasks');
  }

  getAllTaskCategories() {
    return this.http.get('categories');
  }

  createtask(params: any) {
    return this.http.post('tasks', params);
  }
}

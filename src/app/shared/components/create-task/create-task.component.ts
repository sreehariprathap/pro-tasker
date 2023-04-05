import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from 'src/app/core/services/tasks.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'pro-tasker-create-task',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  isChecked: boolean = false;

  faCirclePlus = faCirclePlus;

  taskForm!: FormGroup;
  categories: any;
  constructor(
    private fb: FormBuilder,
    private readonly taskService: TasksService,
    private readonly toast: HotToastService
  ) {
    this.initTaskForm();
  }

  ngOnInit(): void {
    this.getAllTaskCategories();
  }

  initTaskForm() {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      startDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      description: '',
    });
  }

  onSubmit() {
    this.taskService.createtask(this.taskForm.value).subscribe((data) => {
      this.toast.success('task created successfully! 💗');
      this.isChecked = false;
    });
  }

  getAllTaskCategories() {
    this.taskService.getAllTaskCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}

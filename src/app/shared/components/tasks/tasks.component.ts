import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared.module';
import { TasksService } from 'src/app/core/services/tasks.service';
import { TaskCategory } from 'src/app/core/constants/app.constants';
import { ValidationService } from 'src/app/core/services/validation.service';

@Component({
  selector: 'pro-tasker-tasks',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Input() task: any;

  faCircleCheck = faCircleCheck;
  tasks: any = null;
  categories = TaskCategory;
  constructor(public readonly validation: ValidationService) {}

  ngOnInit(): void {
    console.log(this.task);
  }

  getCategoryClassName(categoryId: number): string {
    switch (categoryId) {
      case 1:
        return 'project-color';
      case 2:
        return 'work-color';
      case 3:
        return 'personal-color';
      case 4:
        return 'errands-color';
      case 5:
        return 'fitness-color';
      case 6:
        return 'home-color';
      case 7:
        return 'social-color';
      case 8:
        return 'education-color';
      case 9:
        return 'hobbies-color';
      case 10:
        return 'business-color';
      case 11:
        return 'financial-color';
      case 12:
        return 'health-color';
      case 13:
        return 'family-color';
      case 14:
        return 'travel-color';
      case 15:
        return 'shopping-color';
      case 16:
        return 'entertainment-color';
      case 17:
        return 'volunteering-color';
      case 18:
        return 'birthday-color';
      default:
        return 'default-color';
    }
  }
}

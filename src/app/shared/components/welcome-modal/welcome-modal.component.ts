import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'pro-tasker-welcome-modal',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss'],
})
export class WelcomeModalComponent implements OnInit {
  isChecked: boolean = false;
  @Input() isInitScreen: boolean = false;
  user: any;

  options: AnimationOptions = {
    path: '/assets/lottie/125214-checklist-blue.json',
  };

  constructor() {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
    this.isInitScreen ? (this.isChecked = true) : (this.isChecked = false);
  }
  closeModal() {
    this.isChecked = false;
    this.isInitScreen = false;
  }
}

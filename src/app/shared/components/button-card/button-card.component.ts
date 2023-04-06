import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pro-tasker-button-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
})
export class ButtonCardComponent implements OnInit {
  @Input() taskCategory!: { name: any; icon: any; link: any; isCompleted: any };
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { LoaderService } from 'src/app/core/services/loader.service';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/Comp 1.json',
  };

  animationCreated(animationItem: AnimationItem): void {}
  constructor(public loader: LoaderService) {}

  ngOnInit(): void {}
}

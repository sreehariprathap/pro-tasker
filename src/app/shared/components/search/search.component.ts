import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pro-tasker-search',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  constructor() {}

  ngOnInit(): void {}
}

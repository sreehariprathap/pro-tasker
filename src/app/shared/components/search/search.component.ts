import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'pro-tasker-search',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  searchTerm!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    this.router.navigate(['search'], {
      queryParams: { searchTerm: this.searchTerm },
    });
    this.searchTerm = '';
  }
}

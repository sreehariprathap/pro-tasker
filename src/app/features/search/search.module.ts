import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { TaskCardComponent } from 'src/app/shared/components/task-card/task-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, TaskCardComponent, SharedModule],
})
export class SearchModule {}

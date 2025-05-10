import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type FilterOption = 'all' | 'done' | 'undone';

@Component({
  selector: 'app-todo-filter',
  imports: [FormsModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {
  selected: FilterOption = 'all';

  @Output() filterChanged = new EventEmitter<FilterOption>();

  onChange() {
    this.filterChanged.emit(this.selected);
  }
}

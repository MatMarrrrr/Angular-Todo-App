import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type FilterOption = 'all' | 'done' | 'undone';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {
  selected: FilterOption = 'all';

  @Output() filterChanged = new EventEmitter<FilterOption>();

  onChange(): void {
    this.filterChanged.emit(this.selected);
  }
}

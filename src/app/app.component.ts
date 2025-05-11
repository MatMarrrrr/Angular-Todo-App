import { Component } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { Todo, TodoStorageService } from './services/todo-storage.service';
import { FilterOption, TodoFilterComponent } from './components/todo-filter/todo-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoFormComponent, TodoFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Todo[] = [];
  filter: FilterOption = 'all';

  constructor(private storage: TodoStorageService) { }

  ngOnInit(): void {
    this.tasks = this.storage.getTasks();
  }

  setFilter(option: FilterOption): void {
    this.filter = option;
  }

  get filteredTasks(): Todo[] {
    switch (this.filter) {
      case 'all': return this.tasks;
      case 'done': return this.tasks.filter(task => task.done);
      case 'undone': return this.tasks.filter(task => !task.done);
      default: return this.tasks;
    }
  }

  save(): void {
    this.storage.saveTasks(this.tasks);
  }

  addTask(text: string): void {
    this.tasks.push({ text, done: false });
    this.save();
  }

  markTaskComplete(index: number): void {
    this.tasks[index].done = !this.tasks[index].done;
    this.save();
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
    this.save();
  }
}
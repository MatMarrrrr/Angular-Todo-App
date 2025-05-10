import { Component } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { Todo, TodoStorageService } from './services/todo-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Todo[] = [];

  constructor(private storage: TodoStorageService) { }

  ngOnInit(): void {
    this.tasks = this.storage.getTasks();
  }

  save(): void {
    this.storage.saveTasks(this.tasks);
  }

  addTask(text: string) {
    this.tasks.push({ text, done: false });
    this.save();
  }

  markTaskComplete(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    this.save();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.save();
  }
}
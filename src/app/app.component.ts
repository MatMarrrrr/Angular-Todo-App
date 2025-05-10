import { Component } from '@angular/core';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: { text: string; done: boolean }[] = [
    { text: 'Task 1', done: false },
    { text: 'Task2', done: true }
  ];

  markTaskComplete(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  taskText = '';

  @Output() add = new EventEmitter<string>();

  onSubmit(): void {
    const text = this.taskText.trim();
    if (text) {
      this.add.emit(text);
      this.taskText = '';
    }
  }
}

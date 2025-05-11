import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() text = '';
  @Input() done = false;
  @Input() index!: number;

  @Output() remove = new EventEmitter<number>();
  @Output() markComplete = new EventEmitter<number>();

  onMarkComplete(): void {
    this.markComplete.emit(this.index);
  }

  onRemove(): void {
    this.remove.emit(this.index);
  }
}

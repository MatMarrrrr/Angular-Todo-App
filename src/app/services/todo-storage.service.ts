import { Injectable } from '@angular/core';

export type Todo = { text: string; done: boolean };

const STORAGE_KEY = 'angular-todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  getTasks(): Todo[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: Todo[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public errorMessage?: string;

  constructor(
    private todoStore: TodoStoreService,
    private todoApiService: TodoApiService
  ) {
  }
  public getAll(): Observable<ToDoItem[]> {
    return this.todoApiService.getAll();
  }

  public create(todoItem: ToDoItem): void {
    this.todoApiService.create(todoItem).subscribe({
      next: res => {},
      error: error => {
        this.errorMessage = error.errorMessage
      }
    })
  }

  public update(updateTodoItem: ToDoItem): void {
    this.todoStore.update(updateTodoItem);
  }

  public delete(id: number): Observable<void> {
    return this.todoApiService.delete(id);
  }

  public findById(id: number): Observable<ToDoItem> {
    return this.todoApiService.findById(id);
  }
}

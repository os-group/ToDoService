import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private requestUrl: string = 'https://localhost:5001/todos';
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<ToDoItem[]> {
    return this.httpClient.get<ToDoItem[]>(this.requestUrl);
  }

  public create(todoItem: ToDoItem): Observable<void> {
    return this.httpClient.post<void>(this.requestUrl, todoItem);
  }

  public findById(id: number): Observable<ToDoItem> {
    return this.httpClient.get<ToDoItem>(`${this.requestUrl}/${id}`);
  }

  public update(id: number, todoItem: ToDoItem): Observable<void> {
    return this.httpClient.put<void>(`${this.requestUrl}/${id}`, todoItem);
  }
  
  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.requestUrl}?id=${id}`);
  }
}
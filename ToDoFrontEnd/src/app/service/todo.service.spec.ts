import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpClienSpy: any;

  beforeEach(() => {
    httpClienSpy = jasmine.createSpyObj('HttpClient', ['post', 'get', 'delete'])
    TestBed.configureTestingModule({
      providers: [
        TodoApiService,
        { provide: HttpClient, useValue: httpClienSpy }
      ]
    });
    service = TestBed.inject(TodoService);
  });

  it('should create todoItem via mockHttp post', () => { 
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClienSpy.post.and.returnValue(of({}));
    
    // when
    service.create(todoItem);
    // then
    expect(httpClienSpy.post).toHaveBeenCalledWith(
      'https://localhost:5001/todos', todoItem)
  })

  it('should response error when create failed', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClienSpy.post.and.returnValue(throwError(() =>
      ({ errorMessage: 'create failed' })
    ));

    // when
    service.create(todoItem);

    // then
    expect(service.errorMessage).toEqual('create failed');
  })
    
  it('should return todoItem when get by id', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    // service.create(todoItem);
    
    // when
    service.findById(9);
    // then
    expect(httpClienSpy.get).toHaveBeenCalledWith(
      'https://localhost:5001/todos/9')
  });

  it('should delete success', () => {
    // given
    
    // when
    service.delete(9);
    // then
    expect(httpClienSpy.delete).toHaveBeenCalledWith(
      'https://localhost:5001/todos?id=9')
  });
});

import { Routes, RouterModule } from '@angular/router';
import { ListTodoitemComponent } from './todo/list-todoitem/list-todoitem.component';
import { CreateTodoitemComponent } from './todo/create-todoitem/create-todoitem.component';
import { TodoitemDetailComponent } from './todo/todoitem-detail/todoitem-detail.component';
import { UpdateTodoItemComponent } from './todo/update-todo-item/update-todo-item.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: ListTodoitemComponent },
  { path: 'todos/create', component: CreateTodoitemComponent },
  { path: 'todos/:id', component: TodoitemDetailComponent },
  { path: 'todos/edit/:id', component: UpdateTodoItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

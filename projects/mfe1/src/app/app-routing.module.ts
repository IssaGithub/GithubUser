import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { UserGitListComponent } from './user-git-list/user-git-list.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'mfe2',
    component: UserGitListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

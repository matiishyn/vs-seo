import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './+home/home.component';
import { TodoComponent } from './+todo/todo.component';

export function getLazyModule() {
  return System.import('./+lazy/lazy.module')
    .then(mod => mod[('LazyModule')]);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/en', pathMatch: 'full'},
      { path: ':lang', component: MainComponent,
        children: [
          { path: '', component: HomeComponent},
          { path: 'todo', component: TodoComponent },
          { path: 'lazy', loadChildren: getLazyModule }
        ]
      },
      // { path: 'lazy', loadChildren: getLazyModule }
    ])
  ],
})
export class AppRoutingModule { }

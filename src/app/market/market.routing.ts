import { Routes } from '@angular/router';
import { TodoComponent } from '../+todo/todo.component';
import { LandingComponent } from './modules/landing/landing.component';

export function getLazyModule() {
  return System.import('../+lazy/lazy.module')
    .then(mod => mod[('LazyModule')]);
}

export const mainRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'lazy', loadChildren: getLazyModule}
];

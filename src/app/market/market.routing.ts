import {Routes} from '@angular/router';
import {TodoComponent} from '../+todo/todo.component';
import {LandingComponent} from './modules/landing/landing.component';
import {IndividualVisaComponent} from "./modules/individualVisa/individualVisa.component";
import {BusinessVisaComponent} from "./modules/businessVisa/businessVisa.component";
import {LoginComponent} from "./modules/login/login.component";

export function getLazyModule() {
  return System.import('../+lazy/lazy.module')
    .then(mod => mod[('LazyModule')]);
}

export const mainRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'individual-visa', component: IndividualVisaComponent},
  {path: 'business-visa', component: BusinessVisaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'lazy', loadChildren: getLazyModule}
];

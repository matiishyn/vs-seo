import {Routes} from '@angular/router';
import {LandingComponent} from './modules/landing/landing.component';
import {IndividualVisaComponent} from "./modules/individualVisa/individualVisa.component";
import {BusinessVisaComponent} from "./modules/businessVisa/businessVisa.component";
import {LoginComponent} from "./modules/login/login.component";
import {SignUpComponent} from "./modules/signUp/signUp.component";
import {individualVisaRoutes} from "./modules/individualVisa/individualVisa.routing";

export const mainRoutes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'individual-visa', component: IndividualVisaComponent, children: [...individualVisaRoutes]},
  {path: 'business-visa', component: BusinessVisaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  // {path: 'todo', component: TodoComponent},
  // {path: 'lazy', loadChildren: getLazyModule}
];

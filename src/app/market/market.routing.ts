import {NgModule} from '@angular/core';
import {UIRouterModule} from 'ui-router-ng2';
import {LandingComponent} from './modules/landing/landing.component';
import {IndividualVisaComponent} from "./modules/individualVisa/individualVisa.component";
import {BusinessVisaComponent} from "./modules/businessVisa/businessVisa.component";
import {LoginComponent} from "./modules/login/login.component";
import {SignUpComponent} from "./modules/signUp/signUp.component";

@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: [
        {name: 'app.market', url: '', component: LandingComponent},
        /*{name: 'app.market.individualVisas', url: 'individual-visa', component: IndividualVisaComponent},
        {name: 'app.market.individualVisas.list', url: '/list', component: IndividualVisaComponent},
        {name: 'app.market.businessVisas', url: 'business-visa', component: BusinessVisaComponent},
        {name: 'app.market.login', url: 'login', component: LoginComponent},
        {name: 'app.market.signup', url: 'signup', component: SignUpComponent},*/
      ]
    })
  ],
})
export class MarketRoutingModule {
}

/*
 {path: '', component: LandingComponent},
 {path: 'individual-visa', component: IndividualVisaComponent, children: [...individualVisaRoutes]},
 {path: 'business-visa', component: BusinessVisaComponent},
 {path: 'login', component: LoginComponent},
 {path: 'signup', component: SignUpComponent},
 // {path: 'todo', component: TodoComponent},
 // {path: 'lazy', loadChildren: getLazyModule}
 */

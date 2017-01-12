import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MarketComponent} from './market.component';
import {TodoModule} from '../+todo/todo.module';
import {LandingModule} from './modules/landing/landing.module';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {IndividualVisaModule} from "./modules/individualVisa/individualVisa.module";
import {BusinessVisaModule} from "./modules/businessVisa/businessVisa.module";
import {LoginModule} from "./modules/login/login.module";
import {SignUpModule} from "./modules/signUp/signUp.module";
import {MarketRoutingModule} from "./market.routing";

@NgModule({
  imports: [
    SharedModule,
    LandingModule,
    IndividualVisaModule,
    BusinessVisaModule,
    LoginModule,
    SignUpModule,
    // TodoModule,
    MarketRoutingModule
  ],
  declarations: [
    MarketComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MarketModule {
}

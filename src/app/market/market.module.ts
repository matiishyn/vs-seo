import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MarketComponent} from './market.component';
import {TodoModule} from '../+todo/todo.module';
import {LandingModule} from './modules/landing/landing.module';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  imports: [
    SharedModule,
    LandingModule,
    TodoModule
  ],
  declarations: [
    MarketComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class MarketModule {
}

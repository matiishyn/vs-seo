import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MarketComponent } from './market.component';
import { TodoModule } from '../+todo/todo.module';
import { LandingModule } from './modules/landing/landing.module';

@NgModule({
  imports: [
    SharedModule,
    LandingModule,
    TodoModule
  ],
  declarations: [
    MarketComponent
  ]
})
export class MarketModule {
}

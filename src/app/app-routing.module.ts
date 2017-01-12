import {NgModule} from '@angular/core';
import {UIRouterModule} from 'ui-router-ng2';
import {AppComponent} from "./app.component";
import {MarketComponent} from "./market/market.component";


@NgModule({
  imports: [
    UIRouterModule.forChild({
      states: [
        {
          name: 'app',
          url: '/:lang',
          component: AppComponent,
          abstract: true
        }
      ]
    })
  ],
})
export class AppRoutingModule {
}

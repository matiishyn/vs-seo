import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import {MarketComponent} from './market/market.component';
import {mainRoutes} from './market/market.routing';
import {Meta} from "../angular2-meta";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo: '/en', pathMatch: 'full'},
      {path: ':lang', component: MarketComponent, children: [...mainRoutes]},
    ])
  ],
})
export class AppRoutingModule {
  public constructor(public router: Router, public meta: Meta) {
    /*router.events.subscribe(state => {
      // this.meta.setTitle('U.S. Immigration Online, Individual & Business Visas with VisaLex');
    })*/
  }
}

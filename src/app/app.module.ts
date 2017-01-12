import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from 'ng2-translate';

import {MarketModule} from './market/market.module';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    FormsModule,
    MarketModule,
    TranslateModule
  ]
})

export class AppModule {
}

export {AppComponent} from './app.component';

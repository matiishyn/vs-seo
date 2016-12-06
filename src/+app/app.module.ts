import {TranslateModule, TranslateLoader} from 'ng2-translate';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Http } from '@angular/http';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';
import {Observable} from "rxjs";
import { UniversalModule } from 'angular2-universal';


class CustomLoader implements TranslateLoader {
  constructor(private http: Http) { }

  getTranslation(lang: string): Observable<any> {
    return this.http.get('/api/translation?lang=en');
  }
}

@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useClass: CustomLoader,
      deps: [Http]
    }),
    UniversalModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';

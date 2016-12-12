import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MainModule} from "./main/main.module";
// import { HomeModule } from './+home/home.module';
// import { AboutModule } from './+about/about.module';
// import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateModule} from "ng2-translate";


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    SharedModule,
    // HomeModule,
    // AboutModule,
    // TodoModule,
    AppRoutingModule,
    FormsModule,
    MainModule,
    TranslateModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';

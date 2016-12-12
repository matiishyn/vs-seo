import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { HomeModule } from '../+home/home.module';
import { TodoModule } from '../+todo/todo.module';

@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    TodoModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }

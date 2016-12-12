import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }

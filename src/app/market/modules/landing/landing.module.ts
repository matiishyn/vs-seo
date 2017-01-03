import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { SharedModule } from '../../../shared/shared.module';
import {ImgHeaderComponent} from "../../components/imgHeader/imgHeader.component";

@NgModule({
  imports: [SharedModule],
  declarations: [LandingComponent],
})
export class LandingModule {
}

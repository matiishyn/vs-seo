import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [LandingComponent],
})
export class LandingModule {
}

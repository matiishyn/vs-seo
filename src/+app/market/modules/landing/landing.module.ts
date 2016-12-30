import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { ImgHeaderComponent } from './components/img-header/img-header.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [LandingComponent, ImgHeaderComponent],
  providers: [],
})
export class LandingModule {
}

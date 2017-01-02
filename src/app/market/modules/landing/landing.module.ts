import { NgModule } from '@angular/core';

import { LandingComponent } from './landing.component';
import { ImgHeaderComponent } from './components/img-header/img-header.component';
import { SharedModule } from '../../../shared/shared.module';
import { LandingProductComponent } from './components/landing-product/landing-product.component';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [LandingComponent, ImgHeaderComponent, LandingProductComponent],
  providers: [],
})
export class LandingModule {
}

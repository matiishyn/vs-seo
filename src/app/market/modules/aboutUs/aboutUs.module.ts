import {NgModule} from '@angular/core';

import {AboutUsComponent} from './aboutUs.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [AboutUsComponent],
})
export class AboutUsModule {
}

import {NgModule} from '@angular/core';

import {ContactUsComponent} from './contactUs.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ContactUsComponent],
})
export class ContactUsModule {
}

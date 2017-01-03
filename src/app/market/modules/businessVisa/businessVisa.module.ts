import {NgModule} from '@angular/core';

import {BusinessVisaComponent} from './businessVisa.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [BusinessVisaComponent],
})
export class BusinessVisaModule {
}

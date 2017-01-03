import {NgModule} from '@angular/core';

import {IndividualVisaComponent} from './individualVisa.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [IndividualVisaComponent],
})
export class IndividualVisaModule {
}

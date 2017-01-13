import {NgModule} from '@angular/core';

import {TermsAndConditionsComponent} from './termsAndConditions.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [TermsAndConditionsComponent],
})
export class TermsAndConditionsModule {
}

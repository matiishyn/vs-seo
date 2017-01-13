import {NgModule} from '@angular/core';

import {PrivacyPolicyComponent} from './privacyPolicy.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [PrivacyPolicyComponent],
})
export class PrivacyPolicyModule {
}

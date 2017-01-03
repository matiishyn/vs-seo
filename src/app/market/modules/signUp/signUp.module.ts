import {NgModule} from '@angular/core';

import {SignUpComponent} from './signUp.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [SignUpComponent],
})
export class SignUpModule {
}

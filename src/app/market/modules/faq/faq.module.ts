import {NgModule} from '@angular/core';

import {FaqComponent} from './faq.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [FaqComponent],
})
export class FaqModule {
}

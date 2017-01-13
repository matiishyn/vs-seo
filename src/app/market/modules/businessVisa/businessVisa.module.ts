import {NgModule} from '@angular/core';

import {BusinessVisaComponent} from './businessVisa.component';
import {SharedModule} from '../../../shared/shared.module';
import {BusinessVisaListComponent} from "./list/businessVisaList.component";
import {BusinessVisaMainComponent} from "./howItWorks/businessVisaHowItWorks.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    BusinessVisaComponent,
    BusinessVisaMainComponent,
    BusinessVisaListComponent
  ],
})
export class BusinessVisaModule {
}

import {NgModule} from '@angular/core';

import {IndividualVisaComponent} from './individualVisa.component';
import {SharedModule} from '../../../shared/shared.module';
import {IndividualVisaMainComponent} from "./individualVisaHowItWorks.component";
import {IndividualVisaListComponent} from "./individualVisaList.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    IndividualVisaComponent,
    IndividualVisaListComponent,
    IndividualVisaMainComponent
  ],
})
export class IndividualVisaModule {
}

import {NgModule} from '@angular/core';

import {IndividualVisaComponent} from './individualVisa.component';
import {SharedModule} from '../../../shared/shared.module';
import {IndividualVisaMainComponent} from "./components/howItWorks/individualVisaHowItWorks.component";
import {IndividualVisaListComponent} from "./components/list/individualVisaList.component";
import {IndividualVisaDetailsComponent} from "./components/visaDetails/individualVisaDetails.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    IndividualVisaComponent,
    IndividualVisaListComponent,
    IndividualVisaMainComponent,
    IndividualVisaDetailsComponent
  ],
})
export class IndividualVisaModule {
}

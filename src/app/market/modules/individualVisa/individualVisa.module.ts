import {NgModule} from '@angular/core';

import {IndividualVisaComponent} from './individualVisa.component';
import {SharedModule} from '../../../shared/shared.module';
import {IndividualVisaMainComponent} from "./components/howItWorks/individualVisaHowItWorks.component";
import {IndividualVisaListComponent} from "./components/list/individualVisaList.component";

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

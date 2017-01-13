import {Routes} from '@angular/router';
import {IndividualVisaMainComponent} from "./components/howItWorks/individualVisaHowItWorks.component";
import {IndividualVisaListComponent} from "./components/list/individualVisaList.component";

export const individualVisaRoutes: Routes = [
  {path: '', redirectTo: 'how-it-works', pathMatch: 'full'},
  {path: 'how-it-works', component: IndividualVisaMainComponent},
  {path: 'list', component: IndividualVisaListComponent},
];

import {Routes} from '@angular/router';
import {IndividualVisaMainComponent} from "./components/howItWorks/individualVisaHowItWorks.component";
import {IndividualVisaListComponent} from "./components/list/individualVisaList.component";
import {IndividualVisaDetailsComponent} from "./components/visaDetails/individualVisaDetails.component";

export const individualVisaRoutes: Routes = [
  {path: '', redirectTo: 'how-it-works', pathMatch: 'full'},
  {
    path: 'how-it-works', component: IndividualVisaMainComponent,
    data: {title: 'individualVisas_title'}
  },
  {
    path: 'list', component: IndividualVisaListComponent,
    data: {title: 'individualVisas_title'}
  },
  {
    path: ':visaId', component: IndividualVisaDetailsComponent,
    data: {title: '_title'}   // will be append to visaId
  },
];

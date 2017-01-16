import {Routes} from '@angular/router';
import {BusinessVisaMainComponent} from "./howItWorks/businessVisaHowItWorks.component";
import {BusinessVisaListComponent} from "./list/businessVisaList.component";
import {BusinessVisaDetailsComponent} from "./visaDetails/businessVisaDetails.component";

export const businessVisaRoutes: Routes = [
  {path: '', redirectTo: 'how-it-works', pathMatch: 'full'},
  {path: 'how-it-works', component: BusinessVisaMainComponent},
  {path: 'list', component: BusinessVisaListComponent},
  {path: ':id', component: BusinessVisaDetailsComponent},
];

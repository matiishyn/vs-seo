import {Routes} from '@angular/router';
import {BusinessVisaMainComponent} from "./howItWorks/businessVisaHowItWorks.component";
import {BusinessVisaListComponent} from "./list/businessVisaList.component";

export const businessVisaRoutes: Routes = [
  {path: '', redirectTo: 'how-it-works', pathMatch: 'full'},
  {path: 'how-it-works', component: BusinessVisaMainComponent},
  {path: 'list', component: BusinessVisaListComponent},
];

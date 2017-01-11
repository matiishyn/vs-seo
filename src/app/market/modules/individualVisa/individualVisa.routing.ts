import {Routes} from '@angular/router';
import {IndividualVisaMainComponent} from "./individualVisaMain.component";
import {IndividualVisaListComponent} from "./individualVisaList.component";

export const individualVisaRoutes: Routes = [
  {path: '', redirectTo: 'how-it-works', pathMatch: 'full'},
  {path: 'how-it-works', component: IndividualVisaMainComponent},
  {path: 'list', component: IndividualVisaListComponent},
];

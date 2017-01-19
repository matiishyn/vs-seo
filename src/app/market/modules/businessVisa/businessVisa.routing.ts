import {Routes} from '@angular/router';
import {BusinessVisaMainComponent} from "./howItWorks/businessVisaHowItWorks.component";
import {BusinessVisaListComponent} from "./list/businessVisaList.component";
import {BusinessVisaDetailsComponent} from "./visaDetails/businessVisaDetails.component";

export const businessVisaRoutes: Routes = [
  {path: '', redirectTo: 'how-it-works', pathMatch: 'full'},
  {
    path: 'how-it-works', component: BusinessVisaMainComponent,
    data: {
      keywords: 'keywords_businessVisas',
      description: 'description_businessVisas',
      title: 'businessVisas_title'
    }
  },
  {
    path: 'list', component: BusinessVisaListComponent,
    data: {
      keywords: 'keywords_businessVisas',
      description: 'description_businessVisas',
      title: 'businessVisas_title'
    }
  },
  {
    path: ':visaId', component: BusinessVisaDetailsComponent,
    data: {
      keywords: '_keywords',
      description: '_description',
      title: '_title'
    }   // will be append to visaId
  },
];

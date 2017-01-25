import {Routes} from '@angular/router';
import {IndividualVisaMainComponent} from "./components/howItWorks/individualVisaHowItWorks.component";
import {IndividualVisaListComponent} from "./components/list/individualVisaList.component";
import {IndividualVisaDetailsComponent} from "./components/visaDetails/individualVisaDetails.component";

export const individualVisaRoutes: Routes = [
  {
    path: '', component: IndividualVisaMainComponent,
    data: {
      keywords: 'keywords_individualVisas',
      description: 'description_individualVisas',
      title: 'individualVisas_title'
    }
  },
  {
    path: 'list', component: IndividualVisaListComponent,
    data: {
      keywords: 'keywords_individualVisas',
      description: 'description_individualVisas',
      title: 'individualVisas_title'
    }
  },
  {
    path: ':visaId', component: IndividualVisaDetailsComponent,
    data: {
      keywords: '_keywords',
      description: '_description',
      title: '_title'
    }   // will be append to visaId
  },
];

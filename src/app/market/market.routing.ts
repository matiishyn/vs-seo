import {Routes} from '@angular/router';
import {LandingComponent} from './modules/landing/landing.component';
import {IndividualVisaComponent} from "./modules/individualVisa/individualVisa.component";
import {BusinessVisaComponent} from "./modules/businessVisa/businessVisa.component";
import {TermsAndConditionsComponent} from "./modules/termsAndConditions/termsAndConditions.component";
import {PrivacyPolicyComponent} from "./modules/privacyPolicy/privacyPolicy.component";
import {ContactUsComponent} from "./modules/contactUs/contactUs.component";
import {FaqComponent} from "./modules/faq/faq.component";
import {LoginComponent} from "./modules/login/components/login.component";
import {SignUpComponent} from "./modules/signUp/signUp.component";
import {individualVisaRoutes} from "./modules/individualVisa/individualVisa.routing";
import {businessVisaRoutes} from "./modules/businessVisa/businessVisa.routing";

export const mainRoutes: Routes = [
  {
    path: '', component: LandingComponent,
    data: {
      title: 'site_title',
      keywords: 'keywords_main',
      description: 'description_main'
    }
  },
  {
    path: 'individual-visas',
    component: IndividualVisaComponent,
    data: {title: 'individualVisas_title'},
    children: [...individualVisaRoutes]
  },
  {
    path: 'business-visas',
    component: BusinessVisaComponent,
    data: {title: 'businessVisas_title'},
    children: [...businessVisaRoutes]
  },
  {
    path: 'terms-conditions', component: TermsAndConditionsComponent,
    data: {title: 'tos_title'}
  },
  {
    path: 'contact-us', component: ContactUsComponent,
    data: {title: 'contact_title'}
  },
  {
    path: 'faq', component: FaqComponent,
    data: {title: 'faqs_title'}
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent,
    data: {title: 'privacypolicy_title'}
  },
  {
    path: 'login', component: LoginComponent,
    data: {title: 'login_title'}
  },
  {
    path: 'signup', component: SignUpComponent,
    data: {title: 'registration_title'}
  },
];

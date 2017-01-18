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
    data: {title: 'site_title'}
  },
  {
    path: 'individual-visas',
    component: IndividualVisaComponent,
    data: {title: 'IndividualVisaComponent'},
    children: [...individualVisaRoutes]
  },
  {
    path: 'business-visas',
    component: BusinessVisaComponent,
    data: {title: 'BusinessVisaComponent'},
    children: [...businessVisaRoutes]
  },
  {path: 'terms-conditions', component: TermsAndConditionsComponent, data: {title: 'TermsAndConditionsComponent'}},
  {path: 'contact-us', component: ContactUsComponent, data: {title: 'ContactUsComponent'}},
  {path: 'faq', component: FaqComponent, data: {title: 'FaqComponent'}},
  {path: 'privacy-policy', component: PrivacyPolicyComponent, data: {title: 'PrivacyPolicyComponent'}},
  {path: 'login', component: LoginComponent, data: {title: 'LoginComponent'}},
  {path: 'signup', component: SignUpComponent, data: {title: 'SignUpComponent'}},
];

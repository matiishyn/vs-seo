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
import {AboutUsComponent} from "./modules/aboutUs/aboutUs.component";

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
    data: {
      keywords: 'keywords_individualVisas',
      description: 'description_individualVisas',
      title: 'individualVisas_title'
    },
    children: [...individualVisaRoutes]
  },
  {
    path: 'business-visas',
    component: BusinessVisaComponent,
    data: {
      keywords: 'keywords_businessVisas',
      description: 'description_businessVisas',
      title: 'businessVisas_title'
    },
    children: [...businessVisaRoutes]
  },
  {
    path: 'terms-conditions', component: TermsAndConditionsComponent,
    data: {
      keywords: 'keywords_terms',
      description: 'description_terms',
      title: 'tos_title'
    }
  },
  {
    path: 'contact-us', component: ContactUsComponent,
    data: {
      keywords: 'keywords_contactUs',
      description: 'description_contactUs',
      title: 'contact_title'
    }
  },
  {
    path: 'faq', component: FaqComponent,
    data: {
      keywords: 'keywords_faqs',
      description: 'description_faqs',
      title: 'faqs_title'
    }
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent,
    data: {
      keywords: 'keywords_privacyPolicy',
      description: 'description_privacyPolicy',
      title: 'privacypolicy_title'
    }
  },
  {
    path: 'login', component: LoginComponent,
    data: {
      keywords: 'keywords_login',
      description: 'description_login',
      title: 'login_title'
    }
  },
  {
    path: 'signup', component: SignUpComponent,
    data: {
      keywords: 'keywords_signUp',
      description: 'description_signUp',
      title: 'registration_title'
    }
  },
  {
    path: 'about-us', component: AboutUsComponent,
    data: {
      keywords: 'keywords_aboutUs',
      description: 'description_aboutUs',
      title: 'about_title'
    }
  },
];

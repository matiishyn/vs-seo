import {Component} from '@angular/core';

@Component({
  templateUrl: 'businessVisaList.component.html'
})
export class BusinessVisaListComponent {
  tabsContent = [
    {
      id: 'visa.l1a',
      title: 'visaDetails_businessVisas_l-1a-visa_title',
      p: 'visaDetails_businessVisas_l-1a-visa_short_description',
      price: null,
      link: ['../visa.l1a']
    }, {
      id: 'visa.o1',
      title: 'visaDetails_businessVisas_o-1-visa_title',
      p: 'visaDetails_businessVisas_o-1-visa_short_description',
      price: null,
      link: ['../visa.o1']
    }, {
      id: 'visa.p1a',
      title: 'visaDetails_businessVisas_p-1a-visa_title',
      p: 'visaDetails_businessVisas_p-1a-visa_short_description',
      price: null,
      link: ['../visa.p1a']
    }, {
      id: 'visa.h1b',
      title: 'visaDetails_businessVisas_h-1b-visa_title',
      p: 'visaDetails_businessVisas_h-1b-visa_short_description',
      price: null,
      link: ['../visa.h1b']
    }, {
      id: 'visa.e2',
      title: 'visaDetails_businessVisas_e-2-visa_title',
      p: 'visaDetails_businessVisas_e-2-visa_short_description',
      price: null,
      link: ['../visa.e2']
    },
  ];

  constructor() {
  }
}

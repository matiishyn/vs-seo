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
      link: ['../l-1-visa']
    }, {
      id: 'visa.o1',
      title: 'visaDetails_businessVisas_o-1-visa_title',
      p: 'visaDetails_businessVisas_o-1-visa_short_description',
      price: null,
      link: ['../o-1-visa']
    }, {
      id: 'visa.p1a',
      title: 'visaDetails_businessVisas_p-1a-visa_title',
      p: 'visaDetails_businessVisas_p-1a-visa_short_description',
      price: null,
      link: ['../p-1-visa']
    }, {
      id: 'visa.h1b',
      title: 'visaDetails_businessVisas_h-1b-visa_title',
      p: 'visaDetails_businessVisas_h-1b-visa_short_description',
      price: null,
      link: ['../h-1b-visa']
    }, {
      id: 'visa.e2',
      title: 'visaDetails_businessVisas_e-2-visa_title',
      p: 'visaDetails_businessVisas_e-2-visa_short_description',
      price: null,
      link: ['../e-2-visa']
    },
  ];

  constructor() {
  }
}

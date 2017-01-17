import {Component} from '@angular/core';

@Component({
  templateUrl: 'individualVisaList.component.html'
})
export class IndividualVisaListComponent {
  tabsContent = [
    {
      id: 'visa.b1.b2',
      title: 'visaDetails_individualVisas_b1-b2-visa_title',
      p: 'visaDetails_individualVisas_b1-b2-visa_short_description',
      price: 'qualifying_processingFee_b1-b2-visa_price',
      link: ['../b1-b2-visa']
    }, {
      id: 'visa.f1',
      title: 'visaDetails_individualVisas_f-1-visa_title',
      p: 'visaDetails_individualVisas_f-1-visa_short_description',
      price: 'qualifying_processingFee_f-1-visa_price',
      link: ['../f-1-visa']
    }, {
      id: 'visa.f2',
      title: 'visaDetails_individualVisas_f-2-visa_title',
      p: 'visaDetails_individualVisas_f-2-visa_short_description',
      price: 'qualifying_processingFee_f-2-visa_price',
      link: ['../f-2-visa']
    },
  ];

  constructor() {
  }
}

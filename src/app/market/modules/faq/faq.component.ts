import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: 'faq.component.html'
})
export class FaqComponent implements OnInit{
  isGroupOpen = false;

  generalQuestions: Array<any> = [
    {
      heading: 'faq_general_item01_title',
      content: 'faq_general_item01_text'
    },
    {
      heading: 'faq_general_item02_title',
      content: 'faq_general_item02_text'
    },
    {
      heading: 'faq_general_item03_title',
      content: 'faq_general_item03_text'
    },
    {
      heading: 'faq_general_item04_title',
      content: 'faq_general_item04_text'
    },
  ];

  gettingStarted: Array<any> = [
    {
      heading: 'faq_gettingStarted_item01_title',
      content: 'faq_gettingStarted_item01_text'
    },
    {
      heading: 'faq_gettingStarted_item02_title',
      content: 'faq_gettingStarted_item02_text'
    },
    {
      heading: 'faq_gettingStarted_item03_title',
      content: 'faq_gettingStarted_item03_text'
    },
  ];

  otherTopics: Array<any> = [
    {
      heading: 'faq_otherTopics_item01_title',
      content: 'faq_otherTopics_item01_text'
    },
    {
      heading: 'faq_otherTopics_item02_title',
      content: 'faq_otherTopics_item02_text'
    },
    {
      heading: 'faq_otherTopics_item03_title',
      content: 'faq_otherTopics_item03_text'
    },
  ];

  individualVisas: Array<any> = [
    {
      heading: 'faq_individualVisas_item01_title',
      content: 'faq_individualVisas_item01_text'
    },
    {
      heading: 'faq_individualVisas_item02_title',
      content: 'faq_individualVisas_item02_text'
    },
  ];

  faq_b1b2: Array<any> = [
    {
      heading: 'faq_b1b2_item01_title',
      content: 'faq_b1b2_item01_text'
    },
    {
      heading: 'faq_b1b2_item02_title',
      content: 'faq_b1b2_item02_text'
    },
    {
      heading: 'faq_b1b2_item03_title',
      content: 'faq_b1b2_item03_text'
    },
  ];

  faq_j1j2: Array<any> = [
    {
      heading: 'faq_j1j2_item01_title',
      content: 'faq_j1j2_item01_text'
    },
    {
      heading: 'faq_j1j2_item02_title',
      content: 'faq_j1j2_item02_text'
    },
    {
      heading: 'faq_j1j2_item03_title',
      content: 'faq_j1j2_item03_text'
    },
  ];

  faq_f1f2: Array<any> = [
    {
      heading: 'faq_f1f2_item01_title',
      content: 'faq_f1f2_item01_text'
    },
    {
      heading: 'faq_f1f2_item02_title',
      content: 'faq_f1f2_item02_text'
    },
    {
      heading: 'faq_f1f2_item03_title',
      content: 'faq_f1f2_item03_text'
    },
  ];

  faq_businessVisas: Array<any> = [
    {
      heading: 'faq_businessVisas_item01_title',
      content: 'faq_businessVisas_item01_text'
    },
    {
      heading: 'faq_businessVisas_item02_title',
      content: 'faq_businessVisas_item02_text'
    }
  ];

  faq_h1bh4: Array<any> = [
    {
      heading: 'faq_h1bh4_item01_title',
      content: 'faq_h1bh4_item01_text'
    },
    {
      heading: 'faq_h1bh4_item02_title',
      content: 'faq_h1bh4_item02_text'
    },
    {
      heading: 'faq_h1bh4_item03_title',
      content: 'faq_h1bh4_item03_text'
    },
  ];

  faq_e1e2: Array<any> = [
    {
      heading: 'faq_e1e2_item01_title',
      content: 'faq_e1e2_item01_text'
    },
    {
      heading: 'faq_e1e2_item02_title',
      content: 'faq_e1e2_item02_text'
    },
    {
      heading: 'faq_e1e2_item03_title',
      content: 'faq_e1e2_item03_text'
    },
  ];

  faq_l1l2: Array<any> = [
    {
      heading: 'faq_l1l2_item01_title',
      content: 'faq_l1l2_item01_text'
    },
    {
      heading: 'faq_l1l2_item02_title',
      content: 'faq_l1l2_item02_text'
    },
    {
      heading: 'faq_l1l2_item03_title',
      content: 'faq_l1l2_item03_text'
    },
  ];

  constructor() {}

  ngOnInit() {
  }
}

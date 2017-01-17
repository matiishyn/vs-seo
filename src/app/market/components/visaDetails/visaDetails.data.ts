export interface IVisasDetails {
  [propName: string]: IVisaDetails
}
export interface IVisaDetails {
  id: string;
  title: string;
  img: string;
  description: string;
  priceAnnouncement?: string;
  price?: string;
  additionalPrice?: string;
}

export const visaDetailsData: IVisasDetails = {
  // INDIVIDUAL VISAS
  'b1-b2-visa': {
    id: 'visa.b1.b2',
    title: 'visaDetails_individualVisas_b1-b2-visa_title',
    img: '/assets/images/png/visa-detail-3.png',
    description: 'visaDetails_individualVisas_b1-b2-visa_description',
    priceAnnouncement: 'qualifying_processingFee_b1-b2-visa_priceAnnouncement',
    price: 'qualifying_processingFee_b1-b2-visa_price',
    additionalPrice: 'qualifying_processingFee_b1-b2-visa_additionalPrice'
  },
  'f-1-visa': {
    id: 'visa.f1',
    title: 'visaDetails_individualVisas_f-1-visa_title',
    img: '/assets/images/png/visa-detail-3.png',
    description: 'visaDetails_individualVisas_f-1-visa_description',
    priceAnnouncement: 'qualifying_processingFee_f-1-visa_priceAnnouncement',
    price: 'qualifying_processingFee_f-1-visa_price',
    additionalPrice: 'qualifying_processingFee_f-1-visa_additionalPrice'
  },
  'f-2-visa': {
    id: 'visa.f2',
    title: 'visaDetails_individualVisas_f-2-visa_title',
    img: '/assets/images/png/visa-detail-3.png',
    description: 'visaDetails_individualVisas_f-2-visa_description',
    priceAnnouncement: 'qualifying_processingFee_f-2-visa_priceAnnouncement',
    price: 'qualifying_processingFee_f-2-visa_price',
    additionalPrice: 'qualifying_processingFee_f-2-visa_additionalPrice'
  },

  // BUSINESS VISAS:
  'l-1-visa': {
    id: 'visa.l1a',
    title: 'visaDetails_businessVisas_l-1a-visa_title',
    img: '/assets/images/png/visa-detail-3.png',
    description: 'visaDetails_businessVisas_l-1a-visa_description'
  }
};

export interface IVisasDetails {
  [propName: string]: IVisaDetails
}
export interface IVisaDetails {
  id: string;
  title: string;
  img: string;
  description: string;
  priceAnnouncement: string;
  price: string;
  additionalPrice: string;
}

export const visaDetailsData: IVisasDetails = {
  'b1-b2-visa': {
    id: 'visa.b1.b2',
    title: 'visaDetails_individualVisas_b1-b2-visa_title',
    img: '/assets/images/png/visa-detail-3.png',
    description: 'visaDetails_individualVisas_b1-b2-visa_description',
    priceAnnouncement: 'qualifying_processingFee_b1-b2-visa_priceAnnouncement',
    price: 'qualifying_processingFee_b1-b2-visa_price',
    additionalPrice: 'qualifying_processingFee_b1-b2-visa_additionalPrice'
  }
};

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params, UrlSegment, PRIMARY_OUTLET} from '@angular/router';

import {visaDetailsData, IVisasDetails} from './visaDetails.data';

type VisaType = 'individual' | 'business';

@Component({
  selector: 'visa-details',
  templateUrl: 'visaDetails.component.html'
})
export class VisaDetailsComponent implements OnInit {
  @Input()
  type: VisaType;

  public visaId: string;
  visas: IVisasDetails;

  constructor(public route: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    this.visas = visaDetailsData;
    this.route.params.subscribe(params => {
      this.visaId = params['visaId'];
    });
  }
}

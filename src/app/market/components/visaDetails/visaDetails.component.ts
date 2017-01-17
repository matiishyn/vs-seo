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

  private visaId: string;
  visas: IVisasDetails;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log('INIT');
    this.visas = visaDetailsData;
    this.route.params.subscribe(params => {
      this.visaId = params['visaId'];
    });
  }
}

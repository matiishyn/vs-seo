import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params, UrlSegment, PRIMARY_OUTLET} from '@angular/router';
import {TranslateService} from 'ng2-translate';
import {UrlSegmentGroup} from "@angular/router/src/url_tree";
import {isBrowser} from 'angular2-universal';

@Component({
  // changeDetection: ChangeDetectionStrategy.Default,
  // encapsulation: ViewEncapsulation.Emulated,
  selector: 'main',
  templateUrl: 'market.component.html'
})

export class MarketComponent {
  constructor() {
    console.log('MarketComponent');
  }
}

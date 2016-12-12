import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TranslateService} from "ng2-translate";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'main',
  template: `<div>{{'payment_form_creditCardNumber' | translate}}</div><router-outlet></router-outlet>`
})

export class MainComponent implements OnInit {

  constructor(private translate: TranslateService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.route.params.subscribe(params => {
      this.translate.use(params['lang']);
    });
  }
}

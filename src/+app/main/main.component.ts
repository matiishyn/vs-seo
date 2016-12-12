import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params, UrlSegment, PRIMARY_OUTLET} from '@angular/router';
import {TranslateService} from 'ng2-translate';
import {UrlSegmentGroup} from "@angular/router/src/url_tree";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'main',
  template: `<nav>
    <a routerLinkActive='router-link-active' routerLink=''>Home</a>
    <a routerLinkActive='router-link-active' routerLink='about'>About</a>
    <a routerLinkActive='router-link-active' routerLink='todo'>Todo</a>
    <a routerLinkActive='router-link-active' routerLink='lazy'>Lazy</a>
  </nav>
  <select [(ngModel)]="language" (ngModelChange)="changeLanguage(language)">
    <option value="en">English</option>
    <option value="es">Espagnol</option>
  </select>
  <div>{{'payment_form_creditCardNumber' | translate}}</div><router-outlet></router-outlet>`
})

export class MainComponent implements OnInit {
  constructor(private translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  changeLanguage(lang: string): void {
    const children: UrlSegmentGroup = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = children.segments;
    console.log(s);
    this.router.navigate(['', lang], { relativeTo: this.route });
  }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.route.params.subscribe(params => {
      this.translate.use(params['lang']);
    });
  }
}

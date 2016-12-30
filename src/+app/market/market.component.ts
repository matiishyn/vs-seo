import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params, UrlSegment, PRIMARY_OUTLET} from '@angular/router';
import {TranslateService} from 'ng2-translate';
import {UrlSegmentGroup} from "@angular/router/src/url_tree";
import {isBrowser} from 'angular2-universal';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'main',
  template: `<nav>
    <a routerLinkActive='router-link-active' routerLink='./'>Home</a>
    <a routerLinkActive='router-link-active' routerLink='todo'>Todo</a>
    <a routerLinkActive='router-link-active' routerLink='lazy'>Lazy</a>
  </nav>
  <select [(ngModel)]="language" (ngModelChange)="changeLanguage(language)">
    <option value="en">English</option>
    <option value="es">Espagnol</option>
    <option value="pt">Portuguese</option>
  </select>
  <div>{{'payment_form_creditCardNumber' | translate}}</div><router-outlet></router-outlet>`
})

export class MarketComponent implements OnInit {
  private language: string;

  constructor(private translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    const children: UrlSegmentGroup = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = children.segments;
    const paths = s.map(segment => segment.path);
    paths.shift();
    paths.unshift('', lang);
    if (isBrowser) {
      localStorage.setItem('VISALEX_LANG', lang);
    }
    this.router.navigate(paths, {relativeTo: this.route});
  }

  ngOnInit() {
    if (isBrowser) {
      const lang = localStorage.getItem('VISALEX_LANG');
      if (lang) {
        this.language = lang;
        this.translate.use(lang);
        this.changeLanguage(lang);
        return;
      }
    }
    this.translate.setDefaultLang('en');
    this.route.params.subscribe(params => {
      this.language = params['lang'];
      this.translate.use(params['lang']);
    });
  }
}

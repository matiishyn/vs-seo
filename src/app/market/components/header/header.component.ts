import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import {UrlSegmentGroup} from "@angular/router/src/url_tree";
import {isBrowser, isNode} from 'angular2-universal';

@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  private language: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    /*if (isBrowser) {
     const lang = localStorage.getItem('VISALEX_LANG');
     if (lang) {
     this.language = lang;
     this.translate.use(lang);
     this.changeLanguage(lang);
     return;
     }
     }*/
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    /*this.route.params.subscribe(params => {
     this.language = params['lang'];
     this.translate.use(params['lang']);
     });*/
  }

  changeLanguage(lang: string): void {
    /*this.translate.use(lang);
     const children: UrlSegmentGroup = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET];
     const s: UrlSegment[] = children.segments;
     const paths = s.map(segment => segment.path);
     paths.shift();
     paths.unshift('', lang);
     if (isBrowser) {
     localStorage.setItem('VISALEX_LANG', lang);
     }
     this.router.navigate(paths, {relativeTo: this.route});*/
  }
}
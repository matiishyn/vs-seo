import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params, UrlSegment, PRIMARY_OUTLET} from '@angular/router';
import {TranslateService} from 'ng2-translate';
import {UrlSegmentGroup} from "@angular/router/src/url_tree";
import {isBrowser} from 'angular2-universal';
import {LangService} from "../../services/lang.service";
import {SpinnerService} from "../../services/spinner.service";


@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  private language: string;
  private status: {isOpen: boolean};
  public langTranslated: string;

  constructor(private translate: TranslateService,
              private route: ActivatedRoute,
              private router: Router,
              private Lang: LangService,
              private Spinner: SpinnerService) {
    this.status = {isOpen: false};
  }

  selectLanguage(lang: string): void {
    const observ = this.translate.use(lang);
    this.Spinner.onObservable(observ);
    this.Lang.currentLang = lang;
    const children: UrlSegmentGroup = this.router.parseUrl(this.router.url).root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = children.segments;
    const paths = s.map(segment => segment.path);
    paths.shift();
    paths.unshift('', lang);
    if (isBrowser) {
      localStorage.setItem('VISALEX_LANG', lang);
    }
    this.router.navigate(paths, {relativeTo: this.route});
    this.getLabel(lang);
  }

  ngOnInit() {
    if (isBrowser) {
      const lang = localStorage.getItem('VISALEX_LANG');
      /*if (lang) {
       this.language = lang;
       const observ = this.translate.use(lang);
       this.Spinner.onObservable(observ);
       this.Lang.currentLang = lang;
       this.changeLanguage(lang);
       return;
       }*/
    }
    this.translate.setDefaultLang('en');
    this.Lang.currentLang = 'en';
    this.route.params.subscribe(params => {
      this.language = params['lang'];
      this.Lang.currentLang = params['lang'];
      const observ = this.translate.use(params['lang']);
      this.Spinner.onObservable(observ);
      this.getLabel(this.language);
    });
  }

  get currentLang(): string {
    return `/${this.translate.currentLang}`;
  }

  getLabel(lang: string): void {
    const mapping = {
      en: 'language_english',
      es: 'language_spanish',
      pt: 'language_portuguese'
    };
    this.translate.get(mapping[lang]).subscribe((res: string) => {
      this.langTranslated = res;
    });
  }
}

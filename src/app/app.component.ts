import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, Inject} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Meta} from "../angular2-meta";
import {TranslateService} from "ng2-translate";
import {DOCUMENT} from '@angular/platform-browser';
import {isBrowser} from "angular2-universal";
import {ABSOLUTE_URL} from "./constants";

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styleUrls: ['../index.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public constructor(public router: Router,
                     public meta: Meta,
                     @Inject(DOCUMENT) private document: any,
                     public translate: TranslateService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title: string = this.getRouterData('title', this.router.routerState, this.router.routerState.root).pop();
        const description: string = this.getRouterData('description', this.router.routerState, this.router.routerState.root).pop();
        const keywords: string = this.getRouterData('keywords', this.router.routerState, this.router.routerState.root).pop();
        const canonicalHref: string = this.getRouterData('canonicalHref', this.router.routerState, this.router.routerState.root).pop();
        // translate title
        this.translate.get(title).subscribe((res: string) => {
          this.meta.setTitle(res);
        });
        // translate description
        this.translate.get(description).subscribe((res: string) => {
          this.meta.updateMeta('description', res);
        });
        // translate keywords
        this.translate.get(keywords).subscribe((res: string) => {
          this.meta.updateMeta('keywords', res);
        });

        if (canonicalHref) {
          const madeCanonicalHref = this.makeCanonicalHref(canonicalHref);
          this.meta.addCanonicalLink(madeCanonicalHref);
        }

        // scroll top on every page transition
        if (isBrowser) {
          this.document.body.scrollTop = 0;
        }
      }
    });
  }

  makeCanonicalHref(canonicalHref: string): string {
    canonicalHref = canonicalHref.replace('{{absoluteUrl}}', ABSOLUTE_URL);
    canonicalHref = canonicalHref.replace('{{lang}}', this.translate.currentLang);
    return canonicalHref
  }

  // todo refactor this, can be performance leak here
  public getRouterData(prop, state, parent): string[] {
    let data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data[prop]) {
      const visaId = (parent.snapshot.params && parent.snapshot.params.visaId) || '';
      data.push(visaId + parent.snapshot.data[prop]);
    }

    if (state && parent) {
      data.push(... this.getRouterData(prop, state, state.firstChild(parent)));
    }
    return data;
  }
}

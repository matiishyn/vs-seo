import {Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Meta} from "../angular2-meta";
import {TranslateService} from "ng2-translate";

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
                     public translate: TranslateService) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).pop();
        // translate title
        this.translate.get(title).subscribe((res: string) => {
          this.meta.setTitle(res);
          this.meta.updateMeta('description', 'some description');
          this.meta.updateMeta('keywords', 't1,t2,t3');
        });
      }
    });
  }

  public getTitle(state, parent): string[] {
    let data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      const visaId = (parent.snapshot.params && parent.snapshot.params.visaId) || '';
      data.push(visaId + parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}

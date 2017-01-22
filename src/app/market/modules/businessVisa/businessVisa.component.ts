import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';

@Component({
  templateUrl: 'businessVisa.component.html'
})
export class BusinessVisaComponent implements OnInit {
  public headerVisibleRoutes: Array<string> = ['/business-visas/how-it-works', '/business-visas/list', '/business-visas'];
  public isHeaderVisible: boolean;

  constructor(public router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isHeaderVisible = Boolean(this.headerVisibleRoutes.find(path => event.url.endsWith(path)));
      }
    });
  }
}

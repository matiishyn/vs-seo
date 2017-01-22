import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';


@Component({
  templateUrl: 'individualVisa.component.html'
})
export class IndividualVisaComponent implements OnInit {
  public headerVisibleRoutes: Array<string> = ['/individual-visas/how-it-works', '/individual-visas/list', '/individual-visas'];
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

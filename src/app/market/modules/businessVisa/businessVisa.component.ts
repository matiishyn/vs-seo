import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';

@Component({
  templateUrl: 'businessVisa.component.html'
})
export class BusinessVisaComponent implements OnInit {
  private headerVisibleRoutes: Array<string> = ['/business-visas/how-it-works', '/business-visas/list', '/business-visas'];
  private isHeaderVisible: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isHeaderVisible = Boolean(this.headerVisibleRoutes.find(path => event.url.endsWith(path)));
      }
    });
  }
}

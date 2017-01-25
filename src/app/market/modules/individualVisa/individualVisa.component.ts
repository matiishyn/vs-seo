import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, Event} from '@angular/router';


@Component({
  templateUrl: 'individualVisa.component.html'
})
export class IndividualVisaComponent implements OnInit {
  private headerVisibleRoutes: Array<string> = ['/individual-visas', '/individual-visas/list', '/individual-visas'];
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

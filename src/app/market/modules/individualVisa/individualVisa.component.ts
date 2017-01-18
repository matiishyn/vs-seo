import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  templateUrl: 'individualVisa.component.html'
})
export class IndividualVisaComponent implements OnInit{
  private headerVisibleRoutes: Array<string> = ['/individual-visas/how-it-works', '/individual-visas/list', '/individual-visas'];
  private isHeaderVisible: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(state => {
      // this.isHeaderVisible = Boolean(this.headerVisibleRoutes.find(path => state.url.endsWith(path)));
    });
  }
}

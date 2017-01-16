import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'businessVisa.component.html'
})
export class BusinessVisaComponent implements OnInit {
  private headerVisibleRoutes: Array<string> = ['/business-visa/how-it-works', '/business-visa/list', '/business-visa'];
  private isHeaderVisible: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(state => {
      console.log(state.url);
      this.isHeaderVisible = Boolean(this.headerVisibleRoutes.find(path => state.url.endsWith(path)));
      console.log(this.isHeaderVisible);
    });
  }
}

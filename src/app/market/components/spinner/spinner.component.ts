import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {isBrowser} from 'angular2-universal';
import {SpinnerService} from "../../services/spinner.service";

@Component({
  selector: 'spinner',
  templateUrl: 'spinner.component.html'
})
export class SpinnerComponent implements AfterViewInit {
  @ViewChild('spinner') el: ElementRef;
  private isVisible: boolean;

  constructor(private Spinner: SpinnerService) {
    this.isVisible = true;
  }

  ngAfterViewInit() {
    this.Spinner.start
      .subscribe(() => this.isVisible = true);


    this.Spinner.end
      .subscribe(() => {
        if (isBrowser) {
          this.isVisible = false
        }
      });
  }

}

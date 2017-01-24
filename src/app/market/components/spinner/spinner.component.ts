import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SpinnerService } from "../../services/spinner.service";

@Component({
  selector: 'spinner',
  templateUrl: 'spinner.component.html'
})
export class SpinnerComponent implements AfterViewInit {
  @ViewChild('spinner') el: ElementRef;
  private isVisible: boolean;

  constructor(private Spinner: SpinnerService) {
  }

  ngAfterViewInit() {
    this.Spinner.start
      .subscribe(() => this.isVisible = true);


    this.Spinner.end
      .subscribe(() => this.isVisible = false);
  }

}

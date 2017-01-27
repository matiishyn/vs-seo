import { Directive, ElementRef, AfterViewInit } from "@angular/core";
import { isBrowser } from "angular2-universal";


@Directive({selector: '[scrollable]'})
export class ScrollableDirective implements AfterViewInit {
  private elOffset: number;
  private headerOffset: number;
  private scrollable: HTMLElement;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    if (isBrowser) {
      const {offsetTop: elOffset} = this.el.nativeElement;
      this.elOffset = elOffset;

      this.scrollable = this.el.nativeElement.getElementsByClassName('scrollable')[0];

      const {offsetHeight} = <HTMLElement>document.getElementsByClassName('header-inner')[0];
      this.headerOffset = offsetHeight - 20;

      window.addEventListener('scroll', this.onScroll.bind(this))
    }
  }

  private onScroll() {
    const indent = window.scrollY - this.elOffset + this.headerOffset;

    const elHeight = this.scrollable.offsetHeight;

    const {offsetHeight: sideHeight} = this.el.nativeElement.getElementsByClassName('scrollable-side')[0];

    if (window.scrollY - this.headerOffset >= this.elOffset) {
      if (indent + elHeight <= sideHeight) {
        this.scrollable.classList.add('fixed');
        this.scrollable.style.marginTop = '0';
      } else {
        this.scrollable.classList.remove('fixed');
        this.scrollable.style.marginTop = `${sideHeight - elHeight - this.headerOffset}px`;
      }
    } else {
      this.scrollable.classList.remove('fixed');
    }
  }
}

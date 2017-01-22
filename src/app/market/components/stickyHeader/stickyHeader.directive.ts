import {Directive, Renderer, ElementRef, HostListener, AfterViewInit} from '@angular/core';
import {isBrowser} from 'angular2-universal';


@Directive({
  selector: '[stickyHeader]',
})
export class StickyHeaderDirective implements AfterViewInit {
  public nativeElement: Node;
  public headerTop: number;

  constructor(public renderer: Renderer, public element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  ngAfterViewInit() {
    this.headerTop = this.element.nativeElement.offsetTop;
  }

  // STICKY HEADER
  @HostListener('window:scroll', ['$event'])
  checkStickyHeader(event) {
    const win = event.path.pop();
    const pageYOffset = win.pageYOffset;
    if (pageYOffset >= this.headerTop) {
      this.renderer.setElementClass(this.element.nativeElement, "fixed", true);
    } else {
      this.renderer.setElementClass(this.element.nativeElement, "fixed", false);
    }
  }
}

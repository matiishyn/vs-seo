import { Directive, HostListener, Input, AfterViewInit, ElementRef } from '@angular/core';
import { isBrowser } from 'angular2-universal';

@Directive({selector: '[goTo]'})
export class GoToDirective implements AfterViewInit {
  private headerOffset: number;
  private active: any;

  constructor(private el: ElementRef) {
  }

  @Input() goTo: string;

  @HostListener('click', ['$event']) onClick($event: Event) {
    $event.preventDefault();
    if (isBrowser) {
      const target = document.getElementById(this.goTo).offsetTop - this.headerOffset - 20;
      this.animatedScroll(target, 500);
    }
  }

  ngAfterViewInit() {
    if (isBrowser) {
      const {offsetHeight} = <HTMLElement>document.getElementsByClassName('header-inner')[0];
      this.headerOffset = offsetHeight;
      window.addEventListener('scroll', this.activate.bind(this))
    }
  }

  private activate() {
    const elements = document.getElementsByClassName('goTo-content');
    for (let i = 0; i < elements.length; i++) {
      const el = <HTMLElement>elements[i];
      if (window.scrollY > el.offsetTop - this.headerOffset - 20) {
        this.active = el.getAttribute('id');
      }
    }

    if (!this.active) {
      this.active = elements[0].getAttribute('id');
    }

    if (this.active === this.goTo) {
      this.el.nativeElement.classList.add('active');
    } else if (this.el.nativeElement.classList.contains('active')) {
      this.el.nativeElement.classList.remove('active');
    }
  }

  private animatedScroll(target, time) {
    const frames = time / 10;
    let currentStep = window.scrollY;
    const step = Math.abs(currentStep - target) / frames;

    const int = setInterval(() => {

      if (target > window.scrollY) {
        if (target - currentStep < step) {
          currentStep = target;
          clearInterval(int);
        } else {
          currentStep += step
        }
      } else if (target < window.scrollY) {
        if (currentStep - target < step) {
          currentStep = target;
          clearInterval(int);
        } else {
          currentStep -= step
        }
      } else {
        clearInterval(int);
      }

      window.scrollTo(0, currentStep);
    }, 10)
  }
}

import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styleUrls: ['../index.scss'],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {}

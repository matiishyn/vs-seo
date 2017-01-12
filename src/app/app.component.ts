import {Component, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styleUrls: ['../index.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    console.log('AppComponent');
  }
}

import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styles: [`
    * { padding:0; margin:0; font-family: 'Droid Sans', sans-serif; }
    #universal { text-align:center; font-weight:bold; padding:15px 0; }
    nav { background:#158126; min-height:40px; border-bottom:5px #046923 solid; }
    nav a { font-weight:bold; text-decoration:none; color:#fff; padding:20px; display:inline-block; }
    nav a:hover { background:#00AF36; }
    .hero-universal { min-height:500px; display:block; padding:20px; background: url('/assets/logo.png') no-repeat center center; }
    .inner-hero { background: rgba(255, 255, 255, 0.75); border:5px #ccc solid; padding:25px; }
    .router-link-active { background-color: #00AF36; }
    main { padding:20px 0; }
    pre { font-size:12px; }
  `],
  template: `
  <h3 id="universal">Angular2 Universal</h3>
  <div class="hero-universal">
    <div class="inner-hero">
      <div>
        <span xLarge>Universal JavaScript {{ title }}!</span>
      </div>

      Two-way binding: <input type="text" [(ngModel)]="title">

      <br>
      <br>

      <strong>Router-outlet:</strong>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'ftw';
}

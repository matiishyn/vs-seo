import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

export function getLazyModule() {
  return System.import('./+lazy/lazy.module' + (process.env.AOT ? '.ngfactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'LazyModuleNgFactory' : 'LazyModule')]);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/en', pathMatch: 'full'},
      { path: ':lang', component: MainComponent },
      { path: 'lazy', loadChildren: getLazyModule }
    ])
  ],
})
export class AppRoutingModule { }

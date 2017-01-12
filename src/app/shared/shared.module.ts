import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { ModelService } from './model/model.service';
import { TranslateModule, TranslateService } from "ng2-translate";
import {ImgHeaderComponent} from "../market/components/imgHeader/imgHeader.component";
import {PreFooterComponent} from "../market/components/preFooter/preFooter.component";
import { UIRouterModule } from 'ui-router-ng2';

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  TranslateModule,
  UIRouterModule
];

const PIPES = [
  // put pipes here
];

const COMPONENTS = [
  ImgHeaderComponent,
  PreFooterComponent

  // put shared modules here
];

const PROVIDERS = [
  ModelService,
  ApiService,
  TranslateService
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  exports: [
    ...MODULES,
    ...PIPES,
    ...COMPONENTS
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...PROVIDERS
      ]
    };
  }
}

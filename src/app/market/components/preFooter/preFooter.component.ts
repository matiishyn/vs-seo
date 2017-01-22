import {Component} from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'my-pre-footer',
  templateUrl: 'preFooter.component.html'
})
export class PreFooterComponent {
  constructor(public translate: TranslateService) {
  }

  get currentLang(): string {
    return `/${this.translate.currentLang}`;
  }
}

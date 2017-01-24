import { Component, ElementRef, ViewChild, AfterViewInit, Input, forwardRef } from '@angular/core';
import { isBrowser } from "angular2-universal";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

declare namespace grecaptcha {
  export function render(container, parameters)
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RecaptchaComponent),
  multi: true
};

@Component({
  selector: 'recaptcha',
  templateUrl: 'recaptcha.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class RecaptchaComponent implements AfterViewInit {
  @ViewChild('captcha') el: ElementRef;
  @Input() sitekey: string;

  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;
  private innerValue: any;

  constructor() {
  }

  ngAfterViewInit() {
    if (isBrowser) {
      const {sitekey} = this;
      grecaptcha.render(this.el.nativeElement, {
        sitekey,
        callback: this.onResponse.bind(this)
      });
    }
  }

  private onResponse(data) {
    this.value = data;
  }

  // get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

}

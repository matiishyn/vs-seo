import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { UserService } from "../../services/user.service";
import { GoogleAuthService } from "../../services/google.auth.service";
import { FacebookAuthService } from "../../services/facebook.auth.service";
import { isBrowser } from "angular2-universal";
import { NgForm } from "@angular/forms";
import { EnvService } from "../../services/env.service";

@Component({
  templateUrl: 'signUp.component.html'
})
export class SignUpComponent {

  @ViewChild('googleBtn') el: ElementRef;
  private user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    reCaptchaResponse: ''
  };
  private socialProvider: string;
  private emailRequired: boolean;
  private nameRequired: boolean;
  private errors: any = [];
  private passwordPattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z0-9!@#\$%\^\&*\{\}\\\\\'\"\?\)\(+=._-]{8,}$';
  private emailPattern: string = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$';
  private VALIDATION_ERROR_DUPLICATE_EMAIL: string = 'user_registration_duplicate_email';

  constructor(private User: UserService,
              private GoogleAuth: GoogleAuthService,
              private FacebookAuth: FacebookAuthService,
              private Env: EnvService,
              private zone: NgZone) {
  }

  ngAfterViewInit() {
    if (isBrowser) {
      this.GoogleAuth.attachAuthOnElement(this.el.nativeElement)
        .subscribe(data => {
          if (data.firstName && data.lastName) {
            this.User.socialSignUp(data)
              .subscribe(this.redirectToClient.bind(this), this.onSocialError.bind(this, data, 'GOOGLE'))
          } else {
            this.user = data;
            this.nameRequired = true;
          }
        })
    }
  }

  fbAuth() {
    this.FacebookAuth.authenticate()
      .subscribe(data => {
        if (data.email) {
          this.User.socialSignUp(data)
            .subscribe(this.redirectToClient.bind(this), this.onSocialError.bind(this, data, 'FACEBOOK'))
        } else {
          this.user = data;
          this.emailRequired = true;
        }
        this.zone.run(() => {});
      });
  }

  submit(form: NgForm) {
    if (form.valid && (this.user.reCaptchaResponse || this.isSocialLogin())) {
      let promise;
      if (this.isSocialLogin()) {
        promise = this.User.socialSignUp(this.user);
      } else {
        promise = this.User.signUp(this.user);
      }
      promise.subscribe(this.redirectToClient.bind(this), err => this.errors = err.json());
    }
  }

  private isSocialLogin() {
    return this.nameRequired || this.emailRequired;
  }

  private redirectToClient() {
    this.Env.redirectToClient(['/'], {});
  }

  private onSocialError(data, provider, err) {
    this.socialProvider = provider;
    this.errors = err.json();
    this.user = data;
    this.zone.run(() => {});
  }

  private isEmailDuplicate() {
    return this.errors.find(({name}) => name === this.VALIDATION_ERROR_DUPLICATE_EMAIL);
  }

  private isEmailDisabled(email) {
    return this.nameRequired && !this.isEmailDuplicate() && email.pristine;
  }
}

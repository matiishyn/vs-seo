import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UserService } from "../../../services/user.service";
import { isBrowser } from "angular2-universal";
import { Router } from "@angular/router";
import { GoogleAuthService } from "../services/google.auth.service";
import { FacebookAuthService } from "../services/facebook.auth.service";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit {
  private wrongEmailOrPassword: boolean;
  private credentials: any = {
    login: '',
    password: ''
  };

  @ViewChild('googleBtn') el: ElementRef;

  constructor(private User: UserService,
              private Router: Router,
              private GoogleAuth: GoogleAuthService,
              private FacebookAuth: FacebookAuthService) {
  }

  ngAfterViewInit() {
    if (isBrowser) {
      this.GoogleAuth.attachAuthOnElement(this.el.nativeElement)
        .subscribe(data => {
          this.User.socialLogin(data)
            .subscribe(this.onLoggedIn.bind(this))
        })
    }
  }

  fbAuth() {
    this.FacebookAuth.authenticate()
      .subscribe(data => {
        this.User.socialLogin(data)
          .subscribe(this.onLoggedIn.bind(this))
      })
  }

  submit() {
    this.User.login(this.credentials)
      .subscribe(this.onLoggedIn.bind(this));
  }

  private onLoggedIn({logged, twoFactorAuth}) {
    if (logged && !twoFactorAuth) {
      if (isBrowser) {
        window.location.href = 'http://localhost:5555';
      }
    } else if (twoFactorAuth) {
      this.Router.navigate(['/']);
      // this.$state.go('app.market.twoFa', {direct: true});
    }
  }
}

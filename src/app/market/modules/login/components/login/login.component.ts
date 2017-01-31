import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { UserService } from "../../../../services/user.service";
import { isBrowser } from "angular2-universal";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { GoogleAuthService } from "../../../../services/google.auth.service";
import { FacebookAuthService } from "../../../../services/facebook.auth.service";
import { LangService } from "../../../../services/lang.service";
import { EnvService } from "../../../../services/env.service";

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit, OnInit {
  private wrongEmailOrPassword: boolean;
  private credentials: any = {
    login: '',
    password: ''
  };

  @ViewChild('googleBtn') el: ElementRef;
  private lang: string;
  private params: Params;

  constructor(private User: UserService,
              private Router: Router,
              private Route: ActivatedRoute,
              private GoogleAuth: GoogleAuthService,
              private FacebookAuth: FacebookAuthService,
              private Lang: LangService,
              private Env: EnvService) {
    this.lang = Lang.currentLang;
  }

  ngOnInit() {
    this.Route.queryParams.subscribe((params: Params) => this.params = params)
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

  submit(form) {
    if (form.valid) {
      this.User.login(this.credentials)
        .subscribe(this.onLoggedIn.bind(this), () => this.wrongEmailOrPassword = true);
    }
  }

  private onLoggedIn({logged, twoFactorAuth}) {
    if (logged && !twoFactorAuth) {
      this.Env.redirectToClient(['/'], this.params);
    } else if (twoFactorAuth) {
      this.Router.navigate([this.lang, '2fa']);
    }
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { LangService } from "./lang.service";
import { EnvService } from "./env.service";
const jstz = require('jstz');

@Injectable()
export class UserService {
  private apiUrl: string = '/api';
  private accountUrl: string = `${this.apiUrl}/account`;
  private loginUrl: string = `${this.apiUrl}/login`;
  private signUpUrl: string = `${this.accountUrl}/sign-up`;
  private forgotUrl: string = `${this.accountUrl}/forgot-password`;
  private updateUrl: string = `${this.accountUrl}/setNewPassword`;
  private login2faUrl: string = `${this.loginUrl}/2fa`;
  private socialLoginUrl: string = `${this.apiUrl}/login-social`;
  private socialSignUpUrl: string = `${this.apiUrl}/register-social`;

  constructor(private http: Http, private Lang: LangService, private Env: EnvService) {
  }

  login(credentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials)
      .map(res => res.json())
      .catch(this.handleError)
  }

  login2fa(token: string): Observable<any> {
    return this.http.post(`${this.login2faUrl}?token=${token}`, {})
      .map(res => res.json())
      .catch(this.handleError)
  }

  signUp(user): Observable<any> {
    return this.http.post(this.signUpUrl, this.getGlobalSettings(user))
      .catch(this.handleError)
  }

  socialLogin(user) {
    return this.http.post(this.socialLoginUrl, this.getGlobalSettings(user))
      .map(res => res.json())
      .catch(this.handleError)
  }

  socialSignUp(user) {
    return this.http.post(this.socialSignUpUrl, this.getGlobalSettings(user))
      .map(res => res.json())
      .catch(this.handleError)
  }

  forgotPassword(email) {
    const data = {
      email,
      type: "CUSTOMER",
      url: this.Env.generateLink(['/', this.Lang.currentLang, 'update-password'], {token: ''}, 'MARKET')
    };
    return this.http.post(this.forgotUrl, data)
      .catch(this.handleError)
  }

  updatePassword(data) {
    return this.http.post(this.updateUrl, data)
      .catch(this.handleError)
  }

  private getGlobalSettings(data) {
    data.preferredLanguage = this.Lang.currentLang;
    data.timezone = jstz.determine().name();
    return data;
  }

  private handleError(err: Response): Observable<any> {
    console.error(err);
    return Observable.throw(err);
  }
}

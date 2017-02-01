import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LangService} from "./lang.service";
import {EnvService} from "./env.service";
import {ApiService} from "../../shared/api.service";
const jstz = require('jstz');

@Injectable()
export class UserService {
  private accountUrl: string = `account`;
  private loginUrl: string = `login`;
  private signUpUrl: string = `${this.accountUrl}/sign-up`;
  private forgotUrl: string = `${this.accountUrl}/forgot-password`;
  private updateUrl: string = `${this.accountUrl}/setNewPassword`;
  private login2faUrl: string = `${this.loginUrl}/2fa`;
  private socialLoginUrl: string = `login-social`;
  private socialSignUpUrl: string = `register-social`;

  constructor(public api: ApiService, private Lang: LangService, private Env: EnvService) {
  }

  login(credentials): Observable<any> {
    return this.api.post(this.loginUrl, credentials)
      .map(res => res.json())
  }

  login2fa(token: string): Observable<any> {
    return this.api.post(`${this.login2faUrl}?token=${token}`, {})
      .map(res => res.json())
  }

  signUp(user): Observable<any> {
    return this.api.post(this.signUpUrl, this.getGlobalSettings(user))
  }

  socialLogin(user) {
    return this.api.post(this.socialLoginUrl, this.getGlobalSettings(user))
      .map(res => res.json())
  }

  socialSignUp(user) {
    return this.api.post(this.socialSignUpUrl, this.getGlobalSettings(user))
      .map(res => res.json())
  }

  forgotPassword(email) {
    const data = {
      email,
      type: "CUSTOMER",
      url: this.Env.generateLink(['/', this.Lang.currentLang, 'update-password'], {token: ''}, 'MARKET')
    };
    return this.api.post(this.forgotUrl, data)
  }

  updatePassword(data) {
    return this.api.post(this.updateUrl, data)
  }

  private getGlobalSettings(data) {
    data.preferredLanguage = this.Lang.currentLang;
    data.timezone = jstz.determine().name();
    return data;
  }
}

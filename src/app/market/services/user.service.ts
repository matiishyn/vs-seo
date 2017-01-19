import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { LangService } from "./lang.service";
const jstz = require('jstz');

@Injectable()
export class UserService {
  private apiUrl: string = '/api';
  private loginUrl: string = `${this.apiUrl}/login`;
  private socialLoginUrl: string = `${this.apiUrl}/login-social`;

  constructor(private http: Http, private Lang: LangService) {
  }

  login(credentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials)
      .map(res => res.json())
      .catch(this.handleError)
  }

  socialLogin(user) {
    return this.http.post(this.socialLoginUrl, this.getGlobalSettings(user))
      .map(res => res.json())
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

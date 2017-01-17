import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  private apiUrl: string = '/api';
  private loginUrl: string = `${this.apiUrl}/login`;
  // private socialLoginUrl: string = `${this.apiUrl}/login-social`;

  constructor(private http: Http) {
  }

  login(credentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials)
      .map(res => res.json())
      .catch(this.handleError)
  }

  socialLogin(user) {
    return this.http.post(`${this.apiUrl}/login-social`, user)
      .map(res => res.json())
      .catch(this.handleError)
  }

  private handleError(err: Response): Observable<any> {
    console.error(err);
    return Observable.throw(err);
  }
}

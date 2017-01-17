import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class AppSettingsService {
  private apiUrl: string = '/api';
  private loginUrl: string = `${this.apiUrl}/login`;

  constructor(private http: Http) {
  }

  login(credentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials)
      .map(res => res.json())
      .catch(this.handleError)
  }

  get(credentials): Observable<any> {
    return this.http.post(this.loginUrl, credentials)
      .map(res => res.json())
      .catch(this.handleError)
  }

  private handleError(err: Response): Observable<any> {
    console.error(err);
    return Observable.throw(err);
  }

}

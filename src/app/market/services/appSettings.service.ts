import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class AppSettingsService {
  public apiUrl: string = '/api';
  public appSettingsUrl: string = `${this.apiUrl}/tenant/public-app-settings`;

  constructor(public http: Http) {
  }

  getIntercomAppId(): Observable<any> {
    return this.http.get(this.appSettingsUrl)
      .map(res => res.json())
      .catch(this.handleError)
  }

  public handleError(err: Response): Observable<any> {
    console.error(err);
    return Observable.throw(err);
  }

}

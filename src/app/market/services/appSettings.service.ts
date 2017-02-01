import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../shared/api.service";

@Injectable()
export class AppSettingsService {
  constructor(public api: ApiService) {
  }

  getIntercomAppId(): Observable<any> {
    return this.api.get(`tenant/public-app-settings`)
      .map(res => res.json())
  }
}

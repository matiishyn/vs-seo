import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../shared/api.service";

@Injectable()
export class AccountService {

  constructor(public api: ApiService) {
  }

  getAccountSettings(): Observable<any> {
    return this.api.get(`account/settings`)
      .map(res => res.json())
  }
}

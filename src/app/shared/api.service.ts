import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {CacheService} from './cache.service';


@Injectable()
export class ApiService {
  // public apiUrl: string = 'https://qa.dev.visalex.com/api/'; // TODO MAKE IT DYNAMIC
  public apiUrl: string = '/api/';

  constructor(public _http: Http) {

  }

  createAuthorizationHeader(headers: Headers) {
    /*headers.append(
     'Authorization', 'Basic ' + btoa('visalex:e57h495YowZn')
     );*/
  }

  /**
   * whatever domain/feature method name
   */
  get(url: string, options: any = {}) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    options = Object.assign({}, options, {headers});

    return this._http.get(this.apiUrl + url, options)
      .catch(err => {
        console.log('Error: ', err);
        return Observable.throw(err);
      });
  }

  post(url: string, data: any, options: any = {}) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    options = Object.assign({}, options, {headers});

    return this._http.post(this.apiUrl + url, data, options)
      .catch(err => {
        console.log('Error: ', err);
        return Observable.throw(err);
      });
  }

}

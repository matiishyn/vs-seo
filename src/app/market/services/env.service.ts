import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { isBrowser } from "angular2-universal";

@Injectable()
export class EnvService {
  private config = {
    landingDomain: 'http://localhost:3100',
    clientDomain: 'http://localhost:5555',
    internalDomain: 'http://localhost:9999'
  };

  private envConfigUrl: string = '/api/env/config';

  constructor(private http: Http, private Router: Router) {
    if (isBrowser) {
      this.getConfig()
        .subscribe(config => {
          if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
            this.config = config;
          }
        })
    }
  }

  redirectToClient(routes, queryParams) {
    window.location.href = this.generateLink(routes, queryParams, 'CLIENT');
  }

  generateLink(routes, queryParams, instance) {
    const map = {
      MARKET: 'landingDomain',
      CLIENT: 'clientDomain',
      PORTAL: 'internalDomain'
    };
    const domain = map[instance];
    const routerLink = this.Router.createUrlTree(routes, {queryParams}).toString();
    return `${this.config[domain]}${routerLink}`;
  }

  private getConfig() {
    return this.http.get(this.envConfigUrl)
      .map(res => res.json())
      .catch(this.handleError)
  }

  private handleError(err: Response): Observable<any> {
    console.error(err);
    return Observable.throw(err);
  }

}

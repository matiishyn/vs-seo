import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ReplaySubject } from "rxjs";
import { isBrowser } from "angular2-universal";

@Injectable()
export class GoogleAuthService {
  public auth2: gapi.auth2.GoogleAuth;
  public isApiInitialized: ReplaySubject<any> = new ReplaySubject(1);

  constructor(public http: Http) {
    if (isBrowser) {
      http.get('/api/app-social-creds/GOOGLE')
        .map(res => {
          const {appId} = res.json();
          gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
              client_id: appId,
              cookie_policy: 'single_host_origin'
            });
            this.isApiInitialized.next(null);
          })
        }).subscribe();
    }
  }

  attachAuthOnElement(element) {
    const googleSubject: ReplaySubject<any> = new ReplaySubject(1);
    this.isApiInitialized.subscribe(() => {
      this.auth2.attachClickHandler(
        element,
        {},
        user => {
          const authResponse = user.getAuthResponse();
          const profile = user.getBasicProfile();
          const accessToken = authResponse.id_token;
          const userId = profile.getId();

          const googleUser = {
            accessToken,
            userId,
            email: profile.getEmail(),
            firstName: profile.getGivenName(),
            lastName: profile.getFamilyName(),
            imageUrl: profile.getImageUrl(),
            socialCredentials: {
              userId,
              accessToken,
              socialNetwork: 'GOOGLE' // TODO as constant
            }
          };

          googleSubject.next(googleUser);
        },
        (err) => {
          googleSubject.error(err);
        }
      );
    });
    return googleSubject;
  }

}

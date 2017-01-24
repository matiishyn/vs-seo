import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";

@Injectable()
export class FacebookAuthService {

  constructor() {
  }

  authenticate() {
    const fbSubject: ReplaySubject<any> = new ReplaySubject(1);
    FB.login(({authResponse: {accessToken, userID: userId}, status}) => {
      if (status === 'connected') {
        FB.api(`/${userId}`, {fields: 'email,first_name,last_name,picture'}, ({
          email,
          first_name: firstName,
          last_name: lastName,
          picture: {data: {url: imageUrl}}
        }) => {
          fbSubject.next({
            email,
            firstName,
            lastName,
            imageUrl,
            socialCredentials: {
              userId,
              accessToken,
              socialNetwork: 'FACEBOOK' // TODO as constant
            }
          });
        });
      }
    }, {scope: 'public_profile,email'});
    return fbSubject;
  }

}

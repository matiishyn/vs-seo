import { Component } from '@angular/core';
import { UserService } from "../../../../services/user.service";
import { EnvService } from "../../../../services/env.service";

@Component({
  templateUrl: '2fa.component.html'
})
export class twoFAComponent {
  private token: string;
  private incorrectToken: boolean;

  constructor(private User: UserService, private Env: EnvService) {
  }

  submit(form) {
    if (form.valid) {
      this.User.login2fa(this.token)
        .subscribe(this.onLoggedIn.bind(this),
          () => this.incorrectToken = true)
    }
  }

  private onLoggedIn({logged}) {
    if (logged) {
      this.redirectToClient();
    }
  }

  private redirectToClient() {
    this.Env.redirectToClient(['/'], {});
  }
}

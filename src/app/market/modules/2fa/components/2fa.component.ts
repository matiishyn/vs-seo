import { Component } from '@angular/core';
import { UserService } from "../../../services/user.service";

@Component({
  templateUrl: '2fa.component.html'
})
export class twoFAComponent {
  private token: string;

  constructor(private User: UserService) {
  }

  submit(form) {
    if (form.valid) {
      this.User.login2fa(this.token)
        .subscribe(this.onLoggedIn.bind(this))
    }
  }

  private onLoggedIn({logged}) {
    if (logged) {
      this.redirectToClient();
    }
  }

  private redirectToClient() {
    window.location.href = 'http://localhost:5555';
  }
}

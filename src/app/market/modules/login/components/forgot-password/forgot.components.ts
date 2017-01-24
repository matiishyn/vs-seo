import { Component } from '@angular/core';
import { LangService } from "../../../../services/lang.service";
import { UserService } from "../../../../services/user.service";

@Component({
  templateUrl: 'forgot.component.html'
})
export class ForgotComponent {
  private passwordWasSent: boolean;
  private noAccountFound: boolean;
  private lang: string;
  private data = {
    email: ''
  };

  constructor(private Lang: LangService, private User: UserService) {
    this.lang = Lang.currentLang;
  }

  submit(form) {
    if (form.valid) {
      this.User.forgotPassword(this.data.email)
        .subscribe(
          () => this.passwordWasSent = true,
          () => this.noAccountFound = true)
    }
  }
}

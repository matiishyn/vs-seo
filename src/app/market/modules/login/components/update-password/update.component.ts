import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UserService } from "../../../../services/user.service";
import { LangService } from "../../../../services/lang.service";

@Component({
  templateUrl: 'update.component.html'
})
export class UpdateComponent implements OnInit {
  private passwordWasChanged: boolean = false;
  private passwordPattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z0-9!@#\$%\^\&*\{\}\\\\\'\"\?\)\(+=._-]{8,}$';
  private token: string;
  private password: string;
  private lang: string;

  constructor(private Route: ActivatedRoute, private Router: Router, private User: UserService, private Lang: LangService) {
  }

  ngOnInit() {
    this.Route.queryParams.subscribe((params: Params) => {
      const {token} = params;
      this.token = token;
      // fix to prevent removing query params from url
      if (token) {
        this.Router.navigate(['/', this.Lang.currentLang, 'update-password'], {queryParams: {token}})
      }
    })

    this.lang = this.Lang.currentLang;
  }

  submit(form) {
    if (form.valid) {
      const {password, token} = this;
      this.User.updatePassword({password, token})
        .subscribe(() => this.passwordWasChanged = true)
    }
  }
}

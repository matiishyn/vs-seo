import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../../shared/shared.module';
import { ForgotComponent } from "./components/forgot-password/forgot.components";
import { UpdateComponent } from "./components/update-password/update.component";
import { twoFAComponent } from "./components/2fa/2fa.component";

@NgModule({
  imports: [SharedModule],
  declarations: [LoginComponent, ForgotComponent, UpdateComponent, twoFAComponent]
})
export class LoginModule {
}

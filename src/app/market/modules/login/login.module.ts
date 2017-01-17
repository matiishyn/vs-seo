import {NgModule} from '@angular/core';

import {LoginComponent} from './components/login.component';
import {SharedModule} from '../../../shared/shared.module';
import { GoogleAuthService } from "./services/google.auth.service";
import { FacebookAuthService } from "./services/facebook.auth.service";

@NgModule({
  imports: [SharedModule],
  declarations: [LoginComponent],
  providers: [GoogleAuthService, FacebookAuthService]
})
export class LoginModule {
}

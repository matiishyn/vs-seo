import { NgModule } from '@angular/core';
import { twoFAComponent } from "./components/2fa.component";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [twoFAComponent],
    providers: [],
})
export class twoFAModule { }

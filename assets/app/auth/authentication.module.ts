import { NgModule } from '@angular/core';

import {AuthenticationComponent} from './authentication.component';
import { LogoutComponent } from './logout.component';
import {SinginComponent} from './singin.component';
import {SingupComponent} from './singup.component';

@NgModule({
  imports: [],
  declarations: [
    AuthenticationComponent,
    LogoutComponent,
    SinginComponent,
    SingupComponent
  ],
  providers: [],
  exports: [
    AuthenticationComponent,
    LogoutComponent,
    SinginComponent,
    SingupComponent
  ]
})
export class AuthenticationModule { }

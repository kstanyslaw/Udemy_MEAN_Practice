import { NgModule } from '@angular/core';

import { LogoutComponent } from './logout.component';
import {SinginComponent} from './singin.component';
import {SingupComponent} from './singup.component';

@NgModule({
  imports: [],
  declarations: [
    LogoutComponent,
    SinginComponent,
    SingupComponent
  ],
  providers: [],
  exports: [
    LogoutComponent,
    SinginComponent,
    SingupComponent
  ]
})
export class AuthenticationModule { }

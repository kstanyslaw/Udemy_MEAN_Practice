import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {app_routing} from './app.routing';
import { MessageModule } from './messages/message.module';
// import { AuthenticationModule } from './auth/authentication.module';
import {AuthenticationComponent} from './auth/authentication.component';
import { LogoutComponent } from './auth/logout.component';
import {SinginComponent} from './auth/singin.component';
import {SingupComponent} from './auth/singup.component';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    LogoutComponent,
    SinginComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing,
    MessageModule,
    // AuthenticationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

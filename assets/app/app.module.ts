import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import {app_routing} from './app.routing';
import { MessageModule } from './messages/message.module';
// import { AuthenticationModule } from './auth/authentication.module';
import {AuthenticationComponent} from './auth/authentication.component';
import { LogoutComponent } from './auth/logout.component';
import {SinginComponent} from './auth/singin.component';
import {SingupComponent} from './auth/singup.component';
import {AuthService} from './auth/auth.service';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { ErrorModule } from './errors/error.module';


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
    ReactiveFormsModule,
    app_routing,
    MessageModule,
    HttpModule,
    ErrorModule,
    // AuthenticationModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

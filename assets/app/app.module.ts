import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {app_routing} from './app.routing';
import { MessageModule } from './messages/message.module';
import { AuthenticationModule } from './auth/authentication.module';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    app_routing,
    MessageModule,
    AuthenticationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageModule } from './messages/message.module';
import { AuthenticationModule } from './auth/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MessageModule,
    AuthenticationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

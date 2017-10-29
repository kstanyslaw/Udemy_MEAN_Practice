import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import {MessageModule} from './messages/message.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
      BrowserModule,
      FormsModule,
      MessageModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

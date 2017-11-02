import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {MessageListComponent} from './message-list.component';
import {MessageComponent} from './message.component';
import {MessageInpuComponent} from './message-input.component';
import {MessagesComponent} from './messages.component';

import {MessageService} from './message.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MessageListComponent,
    MessageComponent,
    MessageInpuComponent,
    MessagesComponent,
  ],
  providers: [MessageService],
  exports: [
    MessageListComponent,
    MessageComponent,
    MessageInpuComponent,
    MessagesComponent,
  ]
})
export class MessageModule { }

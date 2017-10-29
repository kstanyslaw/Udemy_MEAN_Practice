import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessageListComponent} from './message-list.component';
import {MessageComponent} from './message.component';
import {MessageInpuComponent} from './message-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageListComponent,
    MessageComponent,
    MessageInpuComponent
  ],
  providers: [],
  exports: [
    MessageListComponent,
    MessageComponent,
    MessageInpuComponent
  ]
})
export class MessageModule { }

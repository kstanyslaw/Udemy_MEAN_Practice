import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MessageListComponent} from './message-list.component';
import {MessageComponent} from './message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageListComponent,
    MessageComponent
  ],
  providers: [],
  exports: [
    MessageListComponent,
    MessageComponent
  ]
})
export class MessageModule { }

import { Component } from '@angular/core';

import {Message} from './message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
})
export class MessageListComponent {
  messages: Message[] = [
    new Message ('First Message', 'Stan'),
    new Message ('Second Message', 'Max'),
    new Message ('Third Message', 'July')
  ]
}

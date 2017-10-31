import { RouterModule, Routes } from '@angular/router';

import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';

const app_routes: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);

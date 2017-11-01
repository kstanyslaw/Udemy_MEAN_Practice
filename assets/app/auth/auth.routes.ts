import { Routes } from '@angular/router';

import {SingupComponent} from './singup.component';
import {SinginComponent} from './singin.component';
import {LogoutComponent} from './logout.component';

export const auth_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'singup' },
  { path: 'singup', component: SingupComponent },
  { path: 'singin', component: SinginComponent },
  { path: 'logout', component: LogoutComponent },
];

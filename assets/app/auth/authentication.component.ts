import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl:'./authentication.component.html',
})

export class AuthenticationComponent {
  constructor (private authService: AuthService ) {};

  IsLoggedIn() {
    return this.authService.IsLoggedIn();
  };
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-logout',
  template: '<hr> <div class="col-md-8 col-md-offset-2"> <button type="button" name="button" class="btn btn-danger" (click)="onLogout()">Logout</button> </div>',
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {};

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'singin']);
  };
}

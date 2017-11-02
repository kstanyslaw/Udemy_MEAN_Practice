import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: '<hr> <div class="col-md-8 col-md-offset-2"> <button type="button" name="button" class="btn btn-danger" (click)="onLogout()">Logout</button> </div>',
})
export class LogoutComponent {
  onLogout() {};
}

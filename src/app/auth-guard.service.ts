import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
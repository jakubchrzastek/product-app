import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  login(username: string, password: string): Observable<any> {
    const params = new URLSearchParams();
    params.set('UserName', username);
    params.set('Password', password);

    return this.http.post('http://recruits.siennsoft.com/api/Jwt', params)
      .map((response: Response) => response);
  };

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  };

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}

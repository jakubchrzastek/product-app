import { Injectable, HttpInterceptor, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string): Observable<> {
    const params = new URLSearchParams('UserName=' + username + '&Password=' + password);

    return this.http.post('http://recruits.siennsoft.com/api/Jwt', params)
      .map((response: Response) => response);
  });

  isLoggedIn(): Observable<> {

  });


}

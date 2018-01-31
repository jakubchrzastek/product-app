import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProduct(): Observable<> {
    const token = localStorage.getItem('token');
    const headers = new Headers({ 'Authorization': 'Bearer ' + token });
    const options = new RequestOptions({ headers: headers })

    return this.http.get('http://recruits.siennsoft.com/api/Products', options)
      .map((response: Response) => response);
  }

}

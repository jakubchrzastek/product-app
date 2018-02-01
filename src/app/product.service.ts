import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Product } from './product'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  token: any = localStorage.getItem('token');

  getProducts(): Observable<Response> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    const options = new RequestOptions({ headers: headers })

    return this.http.get('http://recruits.siennsoft.com/api/Products', options)
      .map((response: Response) => response);
  }

  getProduct(id): Observable<Response> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    const options = new RequestOptions({ headers: headers })

    return this.http.get('http://recruits.siennsoft.com/api/Products/' + id, options)
      .map((response: Response) => response);
  }

  createProduct(product): Observable<Response> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    const options = new RequestOptions({ headers: headers })

    return this.http.post('http://recruits.siennsoft.com/api/Products/', product, options)
      .map((response: Response) => response);
  }

  editProduct(id, product): Observable<Response> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    const options = new RequestOptions({ headers: headers })

    return this.http.put('http://recruits.siennsoft.com/api/Products/' + id, product, options)
      .map((response: Response) => response);

  }
  deleteProduct(id): Observable<Response> {
    const headers = new Headers({ 'Authorization': 'Bearer ' + this.token });
    const options = new RequestOptions({ headers: headers })

    return this.http.delete('http://recruits.siennsoft.com/api/Products/' + id, options)
      .map((response: Response) => response);
  }

}

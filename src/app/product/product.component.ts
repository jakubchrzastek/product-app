import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  products: Product[]

  ngOnInit() {

    if (!localStorage.getItem('token')) {
      this.route.navigate(['login']);
    }

    this.productService.getProducts()
      .map(resp => resp.json())
      .subscribe(
      response => this.products = response,
      error => console.error(`Error: ${error.statusText}`)
      );
  }

  logout() {
    this.authenticationService.logout();
  }

}

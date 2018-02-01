import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  type: string = 'editComponent';
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .map(response => response.json())
      .subscribe(product => this.product = product);
  }

  editProduct(product) {
    this.route.params
      .switchMap((params: Params) => this.productService.editProduct(+params['id'], product))
      .map(resp => resp.json())
      .subscribe(
      response => this.router.navigate(['product']),
      error => console.error(`Error: ${error.statusText}`)
      );
  }
}

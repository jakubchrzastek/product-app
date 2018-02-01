import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  create: Product = {
    productID: '',
    name: '',
    price: '',
    description: ''
  };

  type: string = 'addComponent';

  ngOnInit() {
  }

  createProduct(product) {
    this.productService.createProduct(product)
      .map(resp => resp.json())
      .subscribe(
      response => {
        this.router.navigate(['product']);
      },
      error => console.error(`Error: ${error.statusText}`)
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

export interface Product {
  productID: number,
  price: number,
  name: string,
  description: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[]

  ngOnInit() {
    this.productService.getProduct()
      .map(resp => resp.json())
      .subscribe(
      response => this.products = response
      error => console.error(`Error: ${error.statusText}`));
  }

  editProduct() {
    this.productService.editProduct().subscribe()
  }

}

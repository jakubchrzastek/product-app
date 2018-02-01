import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() data: Product;
  @Input() type: string;
  @Output() createProduct = new EventEmitter<Product>();
  @Output() editProduct = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  create(product) {
    this.createProduct.emit(product);
  }

  edit(product) {
    this.editProduct.emit(product);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  delete(id): Observable<any> {
    this.productService.deleteProduct(id)
      .subscribe(
      (response) => console.log('Response', response),
      error => console.error(`Error: ${error.statusText}`)
      );
  }
}

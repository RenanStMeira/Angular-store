import { Component, OnInit } from '@angular/core';
import { ProductService } from 'api/products.service';
import { Product } from 'models/product.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './datails.component.html',
  // styleUrls: ['./products-list.component.scss']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
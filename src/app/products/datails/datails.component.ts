import { Component, OnInit } from '@angular/core';
import { ProductService } from 'api/products.service';
import { Product } from 'models/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'api/products.service';
import { Product } from 'models/product.interface';

@Component({
  selector: 'app-products',
  template: `
  <section style="display: grid; grid-template-columns: repeat(auto-fill, minmax(23%, 1fr)); gap: 1rem;">
    <app-card *ngFor="let product of products" [product]="product" (productClick)="onProductClick(product)"></app-card>
  </section>
  `,
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProductsLimit5().subscribe(products => {
      this.products = products;
    });
  }

  onProductClick(product: Product) {
    this.router.navigate(['/product', product.id]);
  }
}
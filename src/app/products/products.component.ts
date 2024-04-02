import { Component, OnInit } from '@angular/core';
import { ProductService } from 'api/products.service';
import { Product } from 'models/product.interface';

@Component({
  selector: 'app-products',
  template: `
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

      <app-card *ngFor="let product of products" [product]="product" (productClick)="onProductClick(product)" class="w-full p-4 lg:w1/4 md:w-1/2"></app-card>

    </div>
  </div>
</section>
  `,
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  onProductClick(product: Product) {
    console.log(product);
  }
}
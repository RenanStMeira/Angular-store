import { Component, OnInit } from '@angular/core';
import { ProductService } from 'api/products.service';
import { Product } from 'models/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './datails.component.html',
  styleUrls: ['./datails.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.getProductById(+id).subscribe(product => {
        this.product = product;
      });
    }
  }
}
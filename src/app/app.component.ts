import { Component, inject } from '@angular/core';
import { ProductService } from 'api/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly productSvc = inject(ProductService);
  products = this.productSvc.products;
}

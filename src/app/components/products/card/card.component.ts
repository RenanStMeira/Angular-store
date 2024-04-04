import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product: any;
  @Output() productClick = new EventEmitter<void>();

  constructor(private router: Router) { }

  onProductClick() {
    this.productClick.emit();
    this.router.navigate(['/product', this.product.id]);
  }
}
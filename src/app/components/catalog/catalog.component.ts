import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {

  @Input() products!: Product[];

  @Output() productAddedToCart: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product) {
    this.productAddedToCart.emit(product);
  }

}

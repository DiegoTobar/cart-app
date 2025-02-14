import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product'; // Adjust the path as necessary
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() productAddedToCart: EventEmitter<Product> = new EventEmitter();

  addProductToCart(product: Product) {
    this.productAddedToCart.emit(product);
  }

}

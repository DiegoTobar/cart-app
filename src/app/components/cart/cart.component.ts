import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItems';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  @Input() itemsCart: CartItem[] = [];
  @Input() total: number = 0;

  @Output() idProductRemovedFromCart: EventEmitter<number> = new EventEmitter();

  onDeleteItem(id: number) {
    this.idProductRemovedFromCart.emit(id);
  }

  

}

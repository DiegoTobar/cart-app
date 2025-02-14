import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItems'; // Adjust the path as necessary

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() itemsCart: CartItem[] = [];

  @Output() openEventEmmiter = new EventEmitter();

  openCart(): void {
    this.openEventEmmiter.emit();
  }




}

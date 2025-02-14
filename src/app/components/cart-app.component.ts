import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { CartItem } from '../models/cartItems';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartComponent, NavbarComponent],
  templateUrl: './cart-app.component.html'
})
export class CarAppComponent implements OnInit {

  products: Product[] = [] ;
  itemsCart: CartItem[] = [];
  total: number = 0;
  showCart: boolean = false;


  constructor(private service: ProductService){
    
  }
  ngOnInit(): void {
    this.products = this.service.findAll();
    this.itemsCart = JSON.parse(sessionStorage.getItem('cart') || '[]'); ;
    this.calculateTotal();
  }

  onAddCart(product: Product){
    // const hasItem = this.itemsCart.find(item => item.product.id === product.id);
    // if(hasItem){
    //   hasItem.quantity++;
    //   return;
    // }
    // this.itemsCart = [...this.itemsCart, { product: { ...product }, quantity: 1}];

    const hasItem = this.itemsCart.find(item => item.product.id === product.id);
    if(hasItem){
      this.itemsCart = this.itemsCart.map(item => {
        if(item.product.id === product.id){
          return { ...item, quantity: item.quantity + 1};
        }
        return item;
      }
      );
    }
    else{
      this.itemsCart = [...this.itemsCart, { product: { ...product }, quantity: 1}];
    }
    this.calculateTotal();
    this.saveSession();
  }

  onDeleteCart(id: number){
    this.itemsCart = this.itemsCart.filter(item => item.product.id !== id);
    this.calculateTotal();
    this.saveSession();
  }

  calculateTotal(): void{
    this.total = this.itemsCart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  saveSession(): void{
    sessionStorage.setItem('cart', JSON.stringify(this.itemsCart));
  }

  openCart(): void{
    this.showCart = !this.showCart;
  }

}

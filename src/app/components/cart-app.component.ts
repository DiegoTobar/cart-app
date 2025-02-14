import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'cart-app',
  imports: [],
  templateUrl: './cart-app.component.html'
})
export class CarAppComponent implements OnInit {

  products: Product[] = [] ;

  constructor(private service: ProductService){
    
  }
  ngOnInit(): void {
    this.products = this.service.findAll();
  }

}

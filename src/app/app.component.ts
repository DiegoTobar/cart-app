import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarAppComponent } from './components/cart-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CarAppComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'cart-app';
}

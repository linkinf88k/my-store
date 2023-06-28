import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  @Input() product: Product;

  selectedAmount: number = 1;

  constructor(private cartService: CartService, public router: Router) {
    this.product = {
      id: 0,
      name: '',
      url: '',
      price: 0,
      description: '',
    };

    console.log(router);
  }

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.cartService.addToCart(product, this.selectedAmount);
    alert(`You added: ${product.name} ${this.selectedAmount} time/s`);
  }
}

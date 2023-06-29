import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  order: Order = {
    fullName: '',
    total: 0,
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.order = this.cartService.getOrder();
  }
}

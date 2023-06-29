import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @Output() submitOrder: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submit(fullName: any, address: any, creditCard: any): void {
    if (fullName.valid && address.valid && creditCard.valid) {
      this.submitOrder.emit(fullName.control.value);
      this.router.navigate(['/confirmation']);
    } else {
      alert('Check input fields for errors');
    }
  }
}

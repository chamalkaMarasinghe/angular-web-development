import { Component, Input } from '@angular/core';
import { RedTextDirective } from '../../../../shared/directives/red-text.directive';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  imports: [RedTextDirective],
  templateUrl: './order.html',
  styleUrl: './order.css',
  // providers: [OrderService]
})
export class Order {

  @Input() order: { name: string, price: number } = { name: "", price : 0};

  constructor(private orderService: OrderService) {}

  increasePrice(name: string) {
    this.orderService.increasePrice(name);
    console.log(this.orderService.orders);
  }
}

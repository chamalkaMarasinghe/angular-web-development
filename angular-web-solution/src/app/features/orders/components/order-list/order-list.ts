import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedTextDirective } from '../../../../shared/directives/red-text.directive';
import { OrderService } from '../../services/order.service';
import { Order } from '../order/order';

@Component({
  selector: 'app-order-list',
  imports: [FormsModule, RedTextDirective, Order],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
  providers: [OrderService]
})
export class OrderList implements OnInit, DoCheck {

  newOrder: string = '';
  orders: { name: string, price: number}[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.orders;
  }

  ngDoCheck(): void {
    this.orders = this.orderService.orders;        
  }

  addOrder() {
    this.orderService.addOrders(this.newOrder.split(" ")[0], parseInt(this.newOrder.split(" ")[1]));
  }
}

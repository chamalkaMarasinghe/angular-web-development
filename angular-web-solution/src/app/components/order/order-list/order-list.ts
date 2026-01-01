import { Component, DoCheck, OnInit } from '@angular/core';
import { RedTextDirective } from '../../../directives/red-text.directive';
import { Order } from "../order/order";
import { OrderService } from '../../../services/order.service';
import { FormsModule } from '@angular/forms';

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
    console.log(this.orders);
        
  }

  addOrder() {
    this.orderService.addOrders(this.newOrder.split(" ")[0], parseInt(this.newOrder.split(" ")[1]));
  }
}

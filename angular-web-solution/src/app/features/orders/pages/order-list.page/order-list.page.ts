import { Component } from '@angular/core';
import { OrderList } from '../../components/order-list/order-list';

@Component({
  selector: 'app-order-list-page',
  imports: [OrderList],
  templateUrl: './order-list.page.html',
  styleUrl: './order-list.page.css',
})
export class OrderListPage {

}

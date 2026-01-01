import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { Footer } from "./shared/components/footer/footer";
import { OrderList } from './features/orders/components/order-list/order-list';
import { OrderListPage } from './features/orders/pages/order-list.page/order-list.page';
import { HomePage } from "./features/landing/pages/home.page/home.page";
import { OrderCategoriesPage } from "./features/orders/pages/order-categories.page/order-categories.page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, OrderListPage, HomePage, OrderCategoriesPage, OrderCategoriesPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

import { Routes } from '@angular/router';
import { HomePage } from './features/landing/pages/home.page/home.page';
import { OrderListPage } from './features/orders/pages/order-list.page/order-list.page';
import { OrderCategoriesPage } from './features/orders/pages/order-categories.page/order-categories.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'orders',
        component: OrderListPage
    },
    {
        path: 'categories',
        component: OrderCategoriesPage
    }
];

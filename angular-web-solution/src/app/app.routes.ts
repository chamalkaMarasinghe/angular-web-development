import { Routes } from '@angular/router';
import { HomePage } from './features/landing/pages/home.page/home.page';
import { OrderListPage } from './features/orders/pages/order-list.page/order-list.page';
import { OrderCategoriesPage } from './features/orders/pages/order-categories.page/order-categories.page';
import { AuthGaurd } from './core/gaurds/auth.guard';
import { AddProductPage } from './features/products/pages/add-product.page/add-product.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'orders',
        component: OrderListPage,
        canActivate: [AuthGaurd]
    },
    {
        path: 'categories',
        component: OrderCategoriesPage
    },
    {
        path: 'add-product',
        component: AddProductPage
    }
];

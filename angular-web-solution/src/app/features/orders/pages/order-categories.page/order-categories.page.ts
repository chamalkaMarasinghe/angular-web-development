import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-order-categories-page',
  imports: [],
  templateUrl: './order-categories.page.html',
  styleUrl: './order-categories.page.css',
})
export class OrderCategoriesPage implements OnInit, OnDestroy{

  mySubscription: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let customObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count)
      }, 1000);
    })

    this.mySubscription = customObservable.subscribe(data => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe();
  }

  gotoOrders() {
    this.router.navigateByUrl("/orders");
  }

}

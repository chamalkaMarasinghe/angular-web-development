import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from "rxjs/operators"
import { Counter } from "../../../../shared/components/counter/counter";
@Component({
  selector: 'app-order-categories-page',
  imports: [Counter],
  templateUrl: './order-categories.page.html',
  styleUrl: './order-categories.page.css',
})
export class OrderCategoriesPage implements OnInit, OnDestroy{

  mySubscription: Subscription | undefined;
  numval: number = 0;
  changeDetectorRef!: ChangeDetectorRef;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.changeDetectorRef = cdr
  }

  ngOnInit(): void {

    setInterval(() => {
      this.numval = this.numval + 2;
      this.changeDetectorRef.markForCheck();   // force re-render 
    }, 1000)

    // let customObservable = new Observable<number>(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     count++;
    //     observer.next(count)
    //   }, 1000);
    // })

    // this.mySubscription = customObservable.pipe(map(data => { return `amazing count ${data}`})).subscribe(data => {
    //   console.log(data);
    // })
  }

  ngOnDestroy(): void {
    // this.mySubscription?.unsubscribe();
  }

  gotoOrders() {
    this.router.navigateByUrl("/orders");
  }

}

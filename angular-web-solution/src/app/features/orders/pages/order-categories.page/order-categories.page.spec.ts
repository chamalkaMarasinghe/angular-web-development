import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCategoriesPage } from './order-categories.page';

describe('OrderCategoriesPage', () => {
  let component: OrderCategoriesPage;
  let fixture: ComponentFixture<OrderCategoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCategoriesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCategoriesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

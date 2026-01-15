import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list.page',
  imports: [],
  templateUrl: './product-list.page.html',
  styleUrl: './product-list.page.css',
})
export class ProductListPage {

  newProdcut: {
    name: string,
    price: number
  } = {
    name: "Electronic Chargerk",
    price: 34
  }

  constructor(private http: HttpClient, private productService: ProductService) {}

  createProdcut () {
    let productData = this.newProdcut;
    this.productService.createProdcut(productData).subscribe(res => {console.log(res)});
  }

  getProducts () {
    this.productService.getProducts().subscribe(res => console.log(res));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    
    constructor(private http: HttpClient) {}

    createProdcut(productData: any) {
        return this.http.post('https://dummyjson.com/products/add', productData);
    }

    getProducts() {
        return this.http
        .get('https://dummyjson.com/products')
        .pipe(
            map((response: any) => {
                return response?.products?.map((item: any) => {
                    return { id: item?.id, title: item?.title };
                });
            })
        )
    }
}

import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductsResponse } from '../interfaces/products-response';
import { environment } from '../../../environments/environment';
import { Product } from '../interfaces/product';
import { map } from 'rxjs';



interface State {
  isLoading: boolean,
  products: Product[]

}



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public http = inject(HttpClient);

  constructor() {
    this.findAll()
  }


  #state = signal<State>({
    isLoading: true,
    products: []
  })

  public products = computed(() => this.#state().products);
  public isLoading = computed(() => this.#state().isLoading);

  findAll() {
    this.http.get<ProductsResponse>(environment.API_URL + '/products')
      .subscribe(res => {
        console.log(res)
        this.#state.set({
          isLoading: false,
          products: res.products
        })
      })
  }


  findOne(id: number) {
    return this.http.get<Product>(environment.API_URL + `/products/${ id }`)
      .pipe(
        map( resp => resp )
      )
  }
}

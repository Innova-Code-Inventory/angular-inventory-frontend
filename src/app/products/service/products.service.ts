import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient)

  constructor() { 
    this.http.get("http://localhost:8000/api/products")
      .subscribe(res => {
        console.log(res)
      })
  }
}

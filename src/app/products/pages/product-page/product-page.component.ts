import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../../constants/products';
import { switchMap } from 'rxjs';
import { toSignal } from "@angular/core/rxjs-interop";
import { NgStyle } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../service/products.service';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-page.component.html',

})
export class ProductPageComponent {

  private route = inject( ActivatedRoute );
  private productsService = inject(ProductsService);
  

  public product = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.productsService.findOne( id ) )
    )
  )


  constructor() {

  }

}

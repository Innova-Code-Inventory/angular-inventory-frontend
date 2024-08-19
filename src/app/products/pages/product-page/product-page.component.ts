import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../../constants/products';
import { switchMap } from 'rxjs';
import { toSignal } from "@angular/core/rxjs-interop";
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-page.component.html',

})
export class ProductPageComponent {


  public product = {
    id: 123,
    name: "Power T-Shirt",
    image: "https://cdn.shopify.com/s/files/1/1367/5207/files/PowerT-Shirt-GSNavy-A4A9Q-UB9P-0480_c7a809ee-152c-4f05-bbb4-ba55348cec9a_1920x.jpg",
    price: 40,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    slug: "/producto-1"
  };

  constructor() {

  }

}

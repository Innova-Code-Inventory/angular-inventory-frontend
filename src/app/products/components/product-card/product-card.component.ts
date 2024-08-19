import { NgStyle } from '@angular/common';
import { Component, ElementRef, Input, OnInit, signal, ViewChild } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';


interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  image: string,
  slug: string
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatRippleModule, RouterModule, NgStyle],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent{

  constructor(){

  }

  @Input({ required: true })
  product!: Product;

}

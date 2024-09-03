import { Component, Input } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { ProductCardComponent } from "../product-card/product-card.component";
import { products } from '../../../../constants/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatGridList, ProductCardComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {

  @Input({ required: true })
  products!: Product[]
}

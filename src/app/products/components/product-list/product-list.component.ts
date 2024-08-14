import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatGridList, ProductCardComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {

}

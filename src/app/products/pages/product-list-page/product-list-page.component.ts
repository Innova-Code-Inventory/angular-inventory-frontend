import { Component, inject } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [HeaderPageComponent, ProductListComponent],
  templateUrl: './product-list-page.component.html',
})
export class ProductListPageComponent {
  public productsService = inject(ProductsService);
  
  constructor(){
    // this.productsService
  }
  
}

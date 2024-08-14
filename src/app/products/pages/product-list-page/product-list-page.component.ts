import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [HeaderPageComponent, ProductListComponent],
  templateUrl: './product-list-page.component.html',
})
export class ProductListPageComponent {

}

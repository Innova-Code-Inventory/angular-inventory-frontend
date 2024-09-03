import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { NewProductFormComponent } from "../../components/new-product-form/new-product-form.component";

@Component({
  selector: 'app-new-product-page',
  standalone: true,
  imports: [HeaderPageComponent, NewProductFormComponent],
  templateUrl: './new-product-page.component.html',
})
export class NewProductPageComponent {

}

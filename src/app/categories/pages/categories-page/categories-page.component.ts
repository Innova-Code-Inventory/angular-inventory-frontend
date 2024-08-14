import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [HeaderPageComponent, HeaderPageComponent],
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {

}

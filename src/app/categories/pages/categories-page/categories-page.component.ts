import { Component, inject } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [HeaderPageComponent, HeaderPageComponent],
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {
  public categoriesService = inject(CategoriesService);
}

import { Component, inject } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { CategoriesService } from '../../services/categories.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryTableComponent } from "../../components/category-table/category-table.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [HeaderPageComponent, HeaderPageComponent, MatButtonModule, MatIconModule, CategoryTableComponent, MatProgressSpinnerModule],
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {
  public categoriesService = inject(CategoriesService);
}

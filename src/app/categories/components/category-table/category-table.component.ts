import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './category-table.component.html',
})
export class CategoryTableComponent {


  @Input({ required: true })
  categories!: Category[];

}

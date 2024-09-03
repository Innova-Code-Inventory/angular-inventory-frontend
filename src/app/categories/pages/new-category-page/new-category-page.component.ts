import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { HeaderPageComponent } from '../../../shared/components/header-page/header-page.component';

@Component({
  selector: 'app-new-category-page',
  standalone: true,
  imports: [HeaderPageComponent, MatButtonModule],
  templateUrl: './new-category-page.component.html',
})
export class NewCategoryPageComponent {
  category = {
    name: "",
    description: "",
  }
}

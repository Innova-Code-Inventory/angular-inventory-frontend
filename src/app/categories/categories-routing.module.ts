import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { NewCategoryPageComponent } from './pages/new-category-page/new-category-page.component';



const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent,
  },
  {
    path: 'new',
    component: NewCategoryPageComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

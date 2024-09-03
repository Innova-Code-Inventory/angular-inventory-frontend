import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { NewProductPageComponent } from './pages/new-product-page/new-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListPageComponent,
  },
  {
    path: 'view/:slug',
    component: ProductPageComponent
  },
  {
    path: 'new',
    component: NewProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

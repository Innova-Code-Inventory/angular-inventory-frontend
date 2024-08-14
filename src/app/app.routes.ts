import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then( m => m.ProductsModule ),
    },
    {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesModule ),
    },
];

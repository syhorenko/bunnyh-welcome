import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/products/todoshido', pathMatch: 'full' },
  { path: 'products/:id', component: ProductComponent },
  { path: '**', redirectTo: '/products/todoshido' }
];

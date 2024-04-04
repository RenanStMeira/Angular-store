import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/datails/datails.component';
import { FormComponent } from './components/account/form.component';
import { AuthComponent } from './components/auth/auth.component';
import { AllproductsComponent } from './components/allProducts/allproducts.component';

const routes: Routes = [
  { path: 'home', component: ProductsComponent },
  { path: 'products', component: AllproductsComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cadastro', component: FormComponent },
  { path: 'login', component: AuthComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
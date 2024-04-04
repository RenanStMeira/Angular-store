import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/products/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'api/products.service';
import { ProductDetailsComponent } from './components/products/datails/datails.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/account/form.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './pages/account/account.component';
import { AuthComponent } from './components/auth/auth.component';
import { UsersService } from 'api/users.service';
import { AuthComponentPage } from './pages/auth/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    AccountComponent,
    AuthComponent,
    AuthComponentPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
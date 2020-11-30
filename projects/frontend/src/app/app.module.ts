import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RangePipe } from './range.pipe';
import { CategoriesPipe } from './categories.pipe';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, LoginComponent, OrdersComponent, ListproductsComponent, SidebarComponent, ViewCartComponent, MyOrdersComponent, RangePipe, CategoriesPipe, RegistrationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'products', component:ListproductsComponent},
  {path:'myOrders', component:MyOrdersComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'orders', component:OrdersComponent},
  {path:'', redirectTo:'products', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

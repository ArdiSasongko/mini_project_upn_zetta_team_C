import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartRoutingModule } from './cart/cart-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { MenuRoutingModule } from './menu/menu-routing.module';

const routes: Routes = [
  {
    path:"",
    component:HomeRoutingModule
  },
  {
    path:'menu',
    component:MenuRoutingModule
  },
  {
    path:'login',
    component:LoginRoutingModule
  },
  {
    path:'cart',
    component:CartRoutingModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

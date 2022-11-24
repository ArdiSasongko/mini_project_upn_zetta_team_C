import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
//routing module dan module
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { MenuModule } from './menu/menu.module';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { CartModule } from './cart/cart.module';
import { CartRoutingModule } from './cart/cart-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLink,
    //Angular Material
    MatToolbarModule,
    MatButtonModule,
    //routing module dan module
    HomeModule,
    HomeRoutingModule,
    LoginModule,
    LoginRoutingModule,
    MenuModule,
    MenuRoutingModule,
    CartModule,
    CartRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//module dan routing module
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { LoginModule } from './login/login.module';
import { LoginRoutingModule } from './login/login-routing.module';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
//component lain
import { RouterLink } from '@angular/router';
import { MenuModule } from './menu/menu.module';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { CartModule } from './cart/cart.module';
import { CartRoutingModule } from './cart/cart-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { GrapqlModule } from './grapql/grapql.module';
//import { HttpLinkModule } from 'apollo-angular-link-http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterLink,

    //routing module dan module
    HomeModule,
    HomeRoutingModule,
    LoginModule,
    LoginRoutingModule,
    MenuModule,
    MenuRoutingModule,
    CartModule,
    CartRoutingModule,
    //Angular Material
    MatToolbarModule,
    MatButtonModule,
    ApolloModule,
    HttpClientModule,
    GrapqlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

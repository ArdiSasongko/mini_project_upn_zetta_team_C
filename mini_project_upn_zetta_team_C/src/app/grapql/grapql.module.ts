import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'
import { environment } from 'src/environments/environment';
//import { ApolloLink } from 'apollo';

const url = environment.Api;

export function cerateApollo(HttpLink: HttpLink){
  const http = HttpLink.create({uri : url});
  //const authLink = new ApolloLink
  //const authLink = new ApolloL
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    
  ]
})
export class GrapqlModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

const uri = environment.Api;

export function cerateApollo(httplink : HttpLink): ApolloClientOptions<any>{
  const http = httplink.create({uri:uri});
  const authLink = new ApolloLink((operation, forward)=>{
    const token = localStorage.getItem(environment.tokenKey);

    operation.setContext({
      Headers:{
        Authorization : token ? `Bearer $(token)` : ''
      }
    });
    return forward(operation);
  })
  return{
    link : authLink.concat(http),
    cache: new InMemoryCache(),
  }
}
@NgModule({
  providers:[
     {
       provide:APOLLO_OPTIONS,
       useFactory:cerateApollo,
      deps: [HttpLink],
    }
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GraphqlModule { }

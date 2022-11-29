import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  public cartList : any = [];
  public menuList = new BehaviorSubject<any>([]);

  constructor() { }

  getMenu(){
    return this.menuList.asObservable();
  }

  setMenu(item : any){
    this.cartList.push(...item);
    this.menuList.next(item);
  }

  addToCart(item : any){
    this.cartList.push(item);
    this.menuList.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList);
  }

  getTotalPrice():number{
    let GrandTotal = 0;
    this.cartList.map((data:any)=>{
      GrandTotal += data.total;
    });
    return GrandTotal;
  }

  removeCart(item : any){
    this.cartList.map((data:any,index:any)=>{
      if(item.id === data.id){
        this.cartList.splice(index-1,1)
      }
    })
    this.menuList.next(this.cartList);
  }

  clearCart(){
    this.cartList = [];
    this.menuList.next(this.cartList)
  }
  
}

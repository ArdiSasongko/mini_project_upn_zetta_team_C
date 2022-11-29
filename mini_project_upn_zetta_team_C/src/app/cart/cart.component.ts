import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost', 'Actions'];
  public items : any = [];
  public GrandTotal : number = 0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getMenu().subscribe(data =>{
      this.items = data;
      this.GrandTotal = this.cart.getTotalPrice();
    })
  }

  delete(item : any){
    this.cart.removeCart(item);
  }

  clearAll(){
    this.cart.clearCart();
  }

}

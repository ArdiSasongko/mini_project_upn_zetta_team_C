import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../service/menu.service';
import Swal from 'sweetalert2';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  public menu : any;
  constructor(private items:MenuService, private route: ActivatedRoute, private carts : CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.menu = this.items.getdata();
    })
    this.menu.forEach((data:any) => {
      Object.assign(data,{quantity:1,total:data.price})
    });
  }

  addCart(item : any){
    this.carts.addToCart(item);
  }

}

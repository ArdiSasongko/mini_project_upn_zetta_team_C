import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu : any;
  constructor(private items:MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.menu = this.items.getdata();
    })
  }

}

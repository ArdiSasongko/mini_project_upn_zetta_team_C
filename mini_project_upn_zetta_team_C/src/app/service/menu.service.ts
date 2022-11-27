import { Injectable } from '@angular/core';
import { items } from '../shared/item';
import { breads } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getdata():items[]{
    return breads;
  }
}

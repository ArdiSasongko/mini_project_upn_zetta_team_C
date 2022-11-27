import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './detail/detail.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    MenuComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatListModule
  ]
})
export class MenuModule { }

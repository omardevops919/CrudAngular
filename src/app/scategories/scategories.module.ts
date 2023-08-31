import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScategoriesRoutingModule } from './scategories-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
 
  
    ViewComponent
  ],
  imports: [
    CommonModule,
    ScategoriesRoutingModule
  ]
})
export class ScategoriesModule { }

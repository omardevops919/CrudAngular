import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductcardComponent } from './productcard/productcard.component';



@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    ProductcardComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class ProductsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ProductcardComponent } from './productcard/productcard.component';
const routes:Routes=[
  { path: 'products', redirectTo: 'products/index', pathMatch: 'full'},
  { path: 'products/index', component: IndexComponent },
  { path: 'products/:productId/view', component: ViewComponent },
  { path: 'products/create', component: CreateComponent },
  {path: '', component:ProductcardComponent}
  
  ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

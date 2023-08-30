import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes:Routes=[
  { path: 'categories', redirectTo: 'categories/index', pathMatch: 'full'},
  { path: 'categories/index', component: IndexComponent },
  { path: 'categories/:productId/view', component: ViewComponent },
  { path: 'categories/create', component: CreateComponent },
  { path: 'categories/:categorieId/edit', component: EditComponent } 
  
  ]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  CategoriesRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
{ path: 'scategories', redirectTo: 'scategories/index', pathMatch: 'full'},
{ path: 'scategories/index', component: IndexComponent },
{ path: 'scategories/:scategoriesId/view', component: ViewComponent },
{ path: 'scategories/create', component: CreateComponent },


]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScategoriesRoutingModule { }

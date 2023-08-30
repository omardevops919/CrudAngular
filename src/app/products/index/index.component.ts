import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})




export class IndexComponent  {
  constructor(public productsService: ProductsService ) { }
  products: Products[] = [];
  columns: string[] = ['imageart','designation','marque','prix'];
  ngOnInit(): void {
    this.productsService.getAllarticles().subscribe((data: Products[])=>
    this.products=data)
    }
  delarticle(_id:object){
    this.productsService.deleteArticle(_id).subscribe(res => {
      this.products = this.products.filter((item: { _id: object; }) =>
      
      item._id !== _id);
      
      console.log('Post deleted successfully!');
      })
      }
  }
    

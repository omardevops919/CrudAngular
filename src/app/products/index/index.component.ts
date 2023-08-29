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
    
}
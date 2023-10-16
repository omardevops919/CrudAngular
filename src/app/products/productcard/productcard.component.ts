import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
produits:Products[]=[]
constructor (private persev:ProductsService){}
ngOnit():void{
  this.getproduits()
}
getproduits(){
  this.persev.getAllarticles().subscribe((data:Products[])=>
  this.produits=data)
}
}

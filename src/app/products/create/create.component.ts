import { Component } from '@angular/core';
import { Products } from '../products';
import { Scategories } from 'src/app/scategories/scategories';
import { ScategoriesService } from 'src/app/scategories/scategories.service';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
display ="none";
products:Products=new Products()
scategories:Scategories[]=[] ;
constructor(private prodserv:ProductsService,private scategorie:ScategoriesService){}
ngOnInit(){
this.loadscategorie()
}
loadscategorie(){
return this.scategorie.getAllscategories().subscribe(data=>
this.scategories=data),
(error:any)=>console.log(error)
}

//Méthode  pour AJouter un article
ajoutarticle=()=>{
this.prodserv.createarticle(this.products).subscribe((data=>{
console.log(data)

this.closeModal()
window.location.reload();
}))
}
openModal(){
  this.display="block";
}
closeModal(){
  this.display="none"
}
}

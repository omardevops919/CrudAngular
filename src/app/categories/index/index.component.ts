import { Component } from '@angular/core';
import { categoriesService } from '../categories.service';
import { Categories } from '../categories';
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})




export class IndexComponent  {
  constructor(public categorieService: categoriesService ) { }
  categorie: Categories[] = [];
  columns: string[] = ['imagecategorie','nomcategorie'];
  ngOnInit(): void {
    this.categorieService.getAllcategories().subscribe((data: Categories[])=>
    this.categorie=data)
    }
    
}
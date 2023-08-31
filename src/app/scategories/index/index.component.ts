import { Component } from '@angular/core';
import { ScategoriesService } from '../scategories.service';
import {Scategories } from '../scategories';
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})




export class IndexComponent  {
  constructor(public scategoriesService: ScategoriesService ) { }
  scategories: Scategories[] = [];
  columns: string[] = ['imagescat','scategorieID','nomscategorie'];
  ngOnInit(): void {
    this.scategoriesService.getAllscategories().subscribe((data: Scategories[])=>
    this.scategories=data)
    }
  delarticle(_id:object){
    this.scategoriesService.deletescategories(_id).subscribe(res => {
      this.scategories = this.scategories.filter((item: { _id: object; }) =>
      
      item._id !== _id);
      
      console.log('Post deleted successfully!');
      })
      }
  }
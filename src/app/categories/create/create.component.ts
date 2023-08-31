import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
display="none";

openModal(){
  this.display="block";
}
closeModal(){
  this.display="none";
}
}

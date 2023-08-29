import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';
@Injectable({
providedIn: 'root'
})
export class ProductsService {
private baseur1 = "http://localhost:3001/api/articles";

constructor(private httpClient: HttpClient) { }

getAllarticles(): Observable<Products[]> {
  return this.httpClient.get<Products[]>(this.baseur1)

}
}   



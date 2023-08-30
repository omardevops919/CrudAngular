import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
providedIn: 'root'
})
export class ProductsService {
private baseur1 = "http://localhost:3001/api/articles/";

constructor(private httpClient: HttpClient) { }

getAllarticles(): Observable<Products[]> {
  return this.httpClient.get<Products[]>(this.baseur1)
}

deleteArticle(_id:object){
  return this.httpClient.delete(this.baseur1 + _id)
}

createarticle(prod:Products): Observable<Products> {
  return this.httpClient.post<Products>(this.baseur1,prod)
}
getarticles(_id:object): Observable<Products> {
  return this.httpClient.get<Products>(this.baseur1 +  _id)
}
updatearticle(_id:object, prod:Products): Observable<any> {
  return this.httpClient.put(this.baseur1 +  _id,prod)
  }
}   



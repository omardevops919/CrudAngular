import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Scategories } from './scategories';

@Injectable({
providedIn: 'root'
})
export class ScategoriesService {
private baseur1 = "http://localhost:3001/api/scategories/";

constructor(private httpClient: HttpClient) { }

getAllscategories(): Observable<Scategories[]> {
  return this.httpClient.get<Scategories[]>(this.baseur1)
}

deletescategories(_id:object){
  return this.httpClient.delete(this.baseur1 + _id)
}

createscategories(scat:Scategories): Observable<Scategories> {
  return this.httpClient.post<Scategories>(this.baseur1,scat)
}
getscategories(_id:object): Observable<Scategories> {
  return this.httpClient.get<Scategories>(this.baseur1 +  _id)
}
updatescategories(_id:object, scat:Scategories): Observable<any> {
  return this.httpClient.put(this.baseur1 +  _id,scat)
  }
}   



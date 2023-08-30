import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categories } from './categories';
@Injectable({
providedIn: 'root'
})
export class categoriesService {
private baseur1 = "http://localhost:3001/api/categories";

constructor(public httpClient: HttpClient) { }

getAllcategories(): Observable< Categories[]> {
  return this.httpClient.get< Categories[]>(this.baseur1)

}
}   



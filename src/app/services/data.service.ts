import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/interface'; 
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataService {

  constructor( private http: HttpClient ) { }

  onLoadData(): Observable<Product[]>{
   return this.http.get<Product[]>("./assets/data/DATA.json")
  }
}

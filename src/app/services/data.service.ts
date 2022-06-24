import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/interface'; 
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})

export class DataService {

  constructor( private http: HttpClient ) { }

  onLoadData(): Observable<Product[]>{
   return this.http.get<Product[]>(environment.dataPath)
  }
}

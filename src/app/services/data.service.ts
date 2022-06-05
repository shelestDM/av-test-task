import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/interface'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {

  key: boolean = false;
  dataList: Array<Product> = []


  constructor( private http: HttpClient ) { }

  onLoadData(){
    this.http.get<Array<Product>>("./assets/data/DATA.json")
    .subscribe((response)=>{
      this.dataList = response;
      this.key = true;
    })
 
  }
}

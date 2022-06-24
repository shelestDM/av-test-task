import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../shared/interface';


@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  onCloseKey: boolean = false;
  index: number = 0;
  productData: Product[] = [];
  productKeys: Array<string> = [];


  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData(){
    this.dataService.onLoadData()
    .subscribe( productData=>{
      this.productData = productData;
      this.productKeys = Object.keys(this.productData[0]);
    })
  }

  
  onClick(i:number){
      this.index = i;
      this.onCloseKey = true; 
  }

  onClose(){this.onCloseKey = false;}

}

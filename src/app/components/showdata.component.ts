import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../shared/interface';


@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  onCloseKey: any = null;
  index: any;
  productData: Product[] = [];
  objectTitleArray: Array<any> = [
        "ProductId",
        "ColorIdx",
        "ProductCode",
        "ProductDescription",
        "Price",
        "VoDatum",
        "IsHeavy",
        "RestrictedLands",
        "IsFsk",
        "IsOrdergruppeC"
  ]

  constructor( public dataService: DataService ) { }

  ngOnInit() {
    this.fetchProductData();
  }

  fetchProductData(){
    this.dataService.onLoadData()
    .subscribe( productData=>{
      this.productData = productData;
    })
  }


  onClick(i:number){
      this.index = i;
      this.onCloseKey = true; 
  }

  onClose(){this.onCloseKey = null;}

}

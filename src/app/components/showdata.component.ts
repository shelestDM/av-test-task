import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  test: any = null;
  index: any;
  objectKey: any;
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

  constructor(
    public data: DataService
  ) { }

  ngOnInit(): void {
    this.data.onLoadData();
  }



  onClick(event: any){
    this.test = event.target.abbr; /* innerHTML */
    this.findData();
  }

  findData(){
    this.index = this.data.dataList.findIndex((object)=>{
      return object.ProductId == this.test;
     })
     this. objectKey = Object.keys(this.data.dataList[0])[0]
  }

  onClose(){
    this.test = null;
  }

}

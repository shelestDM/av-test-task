import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'productName'
})

export class ProductName implements PipeTransform {
    //if name of product located in head of discription
    transform(value: string): string {
        if(value.includes('/') && value.includes('-')){
            if(value.indexOf('-')<value.indexOf('/') )
            {   
                let prodNameArr =  value.split('-');
                return prodNameArr[0]
            }
                let prodNameArr =  value.split('/');
                return prodNameArr[0] 
        }
        if(value.includes('/')){
            let prodNameArr =  value.split('/');
            return prodNameArr[0] 
        }
        if(value.includes('-')){
            let prodNameArr =  value.split('-');
            return prodNameArr[0]
        }
        return value.split(' ')[value.split(' ').length-1];
     }
  
    //if name of product located in end of discription
    /* transform(value: string): string {
        let discriptionArr =  value.split(' ');
        return discriptionArr[discriptionArr.length-1]
    } */
}
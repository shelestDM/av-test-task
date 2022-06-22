import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'productName'
})

export class ProductName implements PipeTransform {
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
        if(value.includes('(')){
            let prodNameArr =  value.split('(');
            return prodNameArr[0]
        } 

        return value.split(' ').splice(0, 3).join(' ');
        
        /*  value.split(' ')[0] value.split(' ').splice(0, 3).join(' ') */
    }

}




  
    
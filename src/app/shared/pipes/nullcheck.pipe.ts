import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nullCheck'
})

export class NullCheck implements PipeTransform {
 transform(value: string | number ): string | number {
     if(value ===  0 || value === null)
     {return 'unknown'}
     else{
         return value
     }
 }
}
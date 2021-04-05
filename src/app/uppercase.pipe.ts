import { Pipe, ElementRef, PipeTransform } from '@angular/core';

@Pipe({
    name : 'newUpperCase'
})

export class newUpperCase implements PipeTransform {
    constructor(){
        
    }
    transform(value,arg1:any){
        console.log(value,arg1);
        
       return value.toUpperCase();
    }

}
import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
    selector : '[changeText]'
})

export class changeText {
    constructor(el:ElementRef){
        el.nativeElement.innerText = ''
        el.nativeElement.innerText = 'ganesh'
    }
    @HostListener('click') foo(){
        alert('Host Element is clicked');
    }
}
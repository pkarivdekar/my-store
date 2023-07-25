import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  //ElementRef is giving the direct access to the 
  //element on which this directive will be applied
  constructor(el: ElementRef) {
    //logic to manipulate the style of the element
    el.nativeElement.style.backgroundColor = "aqua";
    el.nativeElement.style.color = "red";
   }
}

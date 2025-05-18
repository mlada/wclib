
import { Directive, ElementRef, Input, ViewChild } from '@angular/core';

@Directive({
  selector: 'ui-card'
})
export class UiCardDirective {
  @ViewChild('el') private el: ElementRef;

  @Input() 
  set header(value: string) {
    this.el.nativeElement.header = value;
  }
  @Input() 
  set imageUrl(value: string) {
    this.el.nativeElement.imageUrl = value;
  }
  @Input() 
  set hoverable(value: boolean) {
    this.el.nativeElement.hoverable = value;
  }
}
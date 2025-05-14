import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-card'
})
export class UiCardDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set header(value: string) {
    this.el.nativeElement.header = value;
  }
  @Input() 
  set image-url(value: string) {
    this.el.nativeElement.image-url = value;
  }
  @Input() 
  set hoverable(value: boolean) {
    this.el.nativeElement.hoverable = value;
  }
}
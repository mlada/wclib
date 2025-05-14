import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-button'
})
export class UiButtonDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set primary(value: boolean) {
    this.el.nativeElement.primary = value;
  }
  @Input() 
  set background-color(value: string) {
    this.el.nativeElement.background-color = value;
  }
  @Input() 
  set size(value: &#x27;small&#x27; | &#x27;medium&#x27; | &#x27;large&#x27;) {
    this.el.nativeElement.size = value;
  }
  @Input() 
  set label(value: string) {
    this.el.nativeElement.label = value;
  }
}
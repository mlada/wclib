import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-input'
})
export class UiInputDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set type(value: &#x27;text&#x27; | &#x27;password&#x27; | &#x27;email&#x27; | &#x27;number&#x27;) {
    this.el.nativeElement.type = value;
  }
  @Input() 
  set value(value: string) {
    this.el.nativeElement.value = value;
  }
  @Input() 
  set placeholder(value: string) {
    this.el.nativeElement.placeholder = value;
  }
  @Input() 
  set disabled(value: boolean) {
    this.el.nativeElement.disabled = value;
  }
}
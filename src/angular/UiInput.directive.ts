import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-input'
})
export class UiInputDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set type(value: 'text' | 'password' | 'email' | 'number') {
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
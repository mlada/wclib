// @ts-ignore
// @ts-nocheck
/* eslint-disable */
import { Directive, ElementRef, Input, ViewChild } from '@angular/core';

@Directive({
  selector: 'ui-input'
})
export class UiInputDirective {
  @ViewChild("el") private el: ElementRef;

  @Input() 
  set type(value:  'text' | 'password' | 'email' | 'number') {
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
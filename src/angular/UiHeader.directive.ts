import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-header'
})
export class UiHeaderDirective {
  constructor(private el: ElementRef) {}

}
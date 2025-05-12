import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-button'
})
export class UiButtonDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set disabled(value: boolean) {
    this.el.nativeElement.disabled = value;
  }
  @Input() 
  set label(value: string) {
    this.el.nativeElement.label = value;
  }
}
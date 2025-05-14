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
  set size(value: 'small' | 'medium' | 'large') {
    this.el.nativeElement.size = value;
  }
  @Input() 
  set label(value: string) {
    this.el.nativeElement.label = value;
  }
}
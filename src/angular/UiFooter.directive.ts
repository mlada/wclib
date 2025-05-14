import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-footer'
})
export class UiFooterDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set socialLinks(value: Array&lt;{name: string, url: string, icon: string}&gt;) {
    this.el.nativeElement.socialLinks = value;
  }
}
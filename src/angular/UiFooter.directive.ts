import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ui-footer'
})
export class UiFooterDirective {
  constructor(private el: ElementRef) {}

  @Input() 
  set socialLinks(value: Array<{name: string, url: string, icon: string}>) {
    this.el.nativeElement.socialLinks = value;
  }
}
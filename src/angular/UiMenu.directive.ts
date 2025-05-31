import { Directive, ElementRef, Input } from '@angular/core';

export type MenuElement = {
  id?: string;
  name: string;
  url: string; 
}

interface UiMenuElement extends HTMLElement {
  type?: 'vertical' | 'horizontal';
  size?: 'small' | 'medium' | 'large';
  elements?: MenuElement[];
}

@Directive({
  selector: 'ui-menu',
  standalone: true
})
export class UiMenuDirective {
  @Input() set type(value: 'vertical' | 'horizontal') {
    this.elementRef.nativeElement.type = value;
  }

  @Input() set size(value: 'small' | 'medium' | 'large') {
    this.elementRef.nativeElement.size = value;
  }

  @Input() set elements(value: MenuElement[]) {
    this.elementRef.nativeElement.elements = value;
  }

  constructor(private elementRef: ElementRef<UiMenuElement>) {
  }
}
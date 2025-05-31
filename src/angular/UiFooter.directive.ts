import { Directive, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'ui-footer',
  standalone: true
})
export class UiFooterDirective {
  @Output() linkClick = new EventEmitter<CustomEvent>();
}
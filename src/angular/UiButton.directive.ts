import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";

interface UiButton extends HTMLElement {
  type?: 'primary' | 'light' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: (event: Event) => void;
}

@Directive({
  selector: "ui-button",
  standalone: true
})
export class UiButtonDirective {
  constructor(private elementRef: ElementRef<UiButton>) {
    this.elementRef.nativeElement.addEventListener('click', (event) => {
      this.click.emit(event);
    });
  }

  @Input()
  set type(value: 'primary' | 'light' | 'secondary' | null) {
    this.elementRef.nativeElement.type = value ?? 'primary';
  }

  @Input()
  set size(value: 'small' | 'medium' | 'large' | null) {
    this.elementRef.nativeElement.size = value ?? 'medium';
  }

  @Input()
  set label(value: string | null) {
    this.elementRef.nativeElement.label = value ?? '';
  }

  @Output() 
  click = new EventEmitter<Event>();
}

import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";

interface UiCard extends HTMLElement {
  title: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  imageUrl?: string;
  imageAlt?: string;
  hoverable?: boolean;
  type?: 'vertical' | 'horizontal';
}

@Directive({
  selector: "ui-card",
  standalone: true
})
export class UiCardDirective {
  constructor(private elementRef: ElementRef<UiCard>) {
    this.elementRef.nativeElement.addEventListener('click', (event) => {
      this.click.emit(event);
    });
  }

  @Input() set title(value: string) { this.elementRef.nativeElement.title = value; }
  @Input() set description(value: string) { this.elementRef.nativeElement.description = value; }
  @Input() set size(value: 'small' | 'medium' | 'large') { this.elementRef.nativeElement.size = value; }
  @Input() set imageUrl(value: string) { this.elementRef.nativeElement.imageUrl = value; }
  @Input() set imageAlt(value: string) { this.elementRef.nativeElement.imageAlt = value; }
  @Input() set hoverable(value: boolean) { this.elementRef.nativeElement.hoverable = value; }
  @Input() set type(value: 'vertical' | 'horizontal') { this.elementRef.nativeElement.type = value; }

  @Output() click = new EventEmitter<Event>();
}
import { Directive, ElementRef, Input } from "@angular/core";

interface UiButton extends HTMLElement {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
}

@Directive({
  selector: "ui-button",
})
export class UiButtonDirective {
  constructor(private elementRef: ElementRef) {}

  private get button(): UiButton {
    return this.elementRef.nativeElement;
  }

  @Input()
  set primary(value: boolean | null) {
    this.button.primary = value ?? undefined;
  }

  @Input()
  set size(value: "small" | "medium" | "large" | null) {
    this.button.size = value ?? 'medium';
  }

  @Input()
  set label(value: string | null) {
    this.button.label = value ?? '';
  }
}
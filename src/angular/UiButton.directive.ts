// @ts-ignore
// @ts-nocheck
/* eslint-disable */
import { Directive, ElementRef, Input, ViewChild } from "@angular/core";

interface UiButton extends HTMLElement {
  primary: boolean;
  size: "small" | "medium" | "large";
  label: string;
}

@Directive({
  selector: "ui-button",
})
export class UiButtonDirective {
  @ViewChild("el") private el!: ElementRef;

  get button(): UiButton {
    return this.el!.nativeElement;
  }

  @Input()
  set primary(value: boolean | undefined) {
    this.button!.primary = !!value;
  }

  @Input()
  set size(value: "small" | "medium" | "large" | undefined) {
    this.button!.size = !value ? "medium" : value;
  }

  @Input()
  set label(value: string) {
    this.button!.label = !value ? "" : value;
  }
}

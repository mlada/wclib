
import { Directive, ElementRef, Input, ViewChild } from "@angular/core";

@Directive({
  selector: "ui-footer",
})
export class UiFooterDirective {
  @ViewChild("el") private el: ElementRef;

  @Input()
  set socialLinks(value: Array<{ name: string; url: string; icon: string }>) {
    this.el.nativeElement.socialLinks = value;
  }
}

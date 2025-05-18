// @ts-ignore
// @ts-nocheck
/* eslint-disable */
import { Directive, ElementRef, ViewChild } from '@angular/core';

@Directive({
  selector: 'ui-header'
})
export class UiHeaderDirective {
  @ViewChild("el") private el: ElementRef;

}
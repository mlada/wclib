import { ElementRef, EventEmitter } from "@angular/core";
interface UiButton extends HTMLElement {
    type?: 'primary' | 'light' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: (event: Event) => void;
}
export declare class UiButtonDirective {
    private elementRef;
    constructor(elementRef: ElementRef<UiButton>);
    set type(value: 'primary' | 'light' | 'secondary' | null);
    set size(value: 'small' | 'medium' | 'large' | null);
    set label(value: string | null);
    click: EventEmitter<Event>;
}
export {};

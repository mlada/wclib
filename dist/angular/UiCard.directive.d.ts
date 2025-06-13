import { ElementRef, EventEmitter } from "@angular/core";
interface UiCard extends HTMLElement {
    title: string;
    description?: string;
    size?: 'small' | 'medium' | 'large';
    imageUrl?: string;
    imageAlt?: string;
    hoverable?: boolean;
    type?: 'vertical' | 'horizontal';
}
export declare class UiCardDirective {
    private elementRef;
    constructor(elementRef: ElementRef<UiCard>);
    set title(value: string);
    set description(value: string);
    set size(value: 'small' | 'medium' | 'large');
    set imageUrl(value: string);
    set imageAlt(value: string);
    set hoverable(value: boolean);
    set type(value: 'vertical' | 'horizontal');
    click: EventEmitter<Event>;
}
export {};

import { ElementRef } from '@angular/core';
export type MenuElement = {
    id?: string;
    name: string;
    url: string;
};
interface UiMenuElement extends HTMLElement {
    type?: 'vertical' | 'horizontal';
    size?: 'small' | 'medium' | 'large';
    elements?: MenuElement[];
}
export declare class UiMenuDirective {
    private elementRef;
    set type(value: 'vertical' | 'horizontal');
    set size(value: 'small' | 'medium' | 'large');
    set elements(value: MenuElement[]);
    constructor(elementRef: ElementRef<UiMenuElement>);
}
export {};

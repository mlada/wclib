import { LitElement, CSSResult } from 'lit';
import { ElementSize, MenuElement, Orientation } from '../../../declaration';
export declare class UiMenu extends LitElement {
    static styles: CSSResult;
    accessor elements: MenuElement[];
    accessor type: Orientation;
    accessor size: ElementSize;
    render(): import("lit").TemplateResult<1>;
}

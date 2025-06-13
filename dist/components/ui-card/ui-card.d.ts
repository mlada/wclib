import { LitElement, CSSResult } from 'lit';
import { ColorTheme, ElementSize, Orientation } from '../../../declaration';
export declare class UiCard extends LitElement {
    static styles: CSSResult;
    accessor title: string;
    accessor description: string;
    accessor size: ElementSize;
    accessor type: Orientation;
    accessor color: ColorTheme;
    accessor imageUrl: string;
    accessor imageAlt: string;
    accessor hoverable: boolean;
    render(): import("lit").TemplateResult<1>;
}
